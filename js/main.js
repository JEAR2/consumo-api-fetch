const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const getAll = async ()=>{
    try {
        let res = await fetch("http://localhost:3333/santos"),
        json = await res.json();
        if(!res.ok) throw {status:res.status, statusText: res.statusText};

        console.log(json)
        json.forEach(element => {
            $template.querySelector(".name").textContent = element.nombre;
            $template.querySelector(".constellation").textContent = element.constelacion;
            $template.querySelector(".edit").dataset.id = element.id;
            $template.querySelector(".edit").dataset.name = element.nombre;
            $template.querySelector(".edit").dataset.constellation = element.constelacion;
            $template.querySelector(".delete").dataset.id = element.id

            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
    } catch (error) {
        let message = error.statusText || "ocurrió un error";
        $table.insertAdjacentHTML("afterend",`<p><b>Error ${error.status}: ${message}</b></p>`);
    }
}

//Para ver los datos de la api (Se hace el llamado a la funcion getAll donde se encuentra la lógica para obtener los datos)
d.addEventListener("DOMContentLoaded",getAll);


d.addEventListener("submit",async e => {
    if(e.target === $form){
        e.preventDefault();
        if(!e.target.id.value){
            //POST
            try {
                let options = {
                    method : "POST",
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body : JSON.stringify({
                        nombre : e.target.nombre.value,
                        constelacion : e.target.constelacion.value
                    })
                }, res = await fetch("http://localhost:3333/santos",options),
                 json = await res.json();

                 if(!res.ok) throw {status:res.status, statusText: res.statusText};

                 location.reload();
            } catch (error) {
                let message = error.statusText || "ocurrió un error";
                $form.insertAdjacentHTML("afterend",`<p><b>Error ${error.status}: ${message}</b></p>`);
            }
        }else{
            //PUT
            try {
                let options = {
                    method : "PUT",
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    },
                    body : JSON.stringify({
                        nombre : e.target.nombre.value,
                        constelacion : e.target.constelacion.value
                    })
                }, res = await fetch(`http://localhost:3333/santos/${e.target.id.value}`,options),
                 json = await res.json();

                 if(!res.ok) throw {status:res.status, statusText: res.statusText};

                 location.reload();
            } catch (error) {
                let message = error.statusText || "ocurrió un error";
                $form.insertAdjacentHTML("afterend",`<p><b>Error ${error.status}: ${message}</b></p>`);
            }
        }
    }
});

d.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        $title.textContent = "Editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".delete")){
        let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

        if(isDelete){
            try {
                let options = {
                    method : "DELETE",
                    headers : {
                        "Content-type" : "application/json; charset=utf-8"
                    }
                }, res = await fetch(`http://localhost:3333/santos/${e.target.dataset.id}`,options),
                 json = await res.json();

                 if(!res.ok) throw {status:res.status, statusText: res.statusText};

                 location.reload();
            } catch (error) {
                let message = error.statusText || "ocurrió un error";
               alert(`Error ${error.status}: ${message}`);
            }
        }
    }
});
