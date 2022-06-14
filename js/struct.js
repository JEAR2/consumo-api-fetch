
const inputName = document.createElement("input");
inputName.type="text";
inputName.name="nombre";
inputName.placeholder = "Nombre";
inputName.required=true;

const inputConstellation = document.createElement("input");
inputConstellation.type="text";
inputConstellation.name="constelacion";
inputConstellation.placeholder = "constelación";
inputConstellation.required = true;

const inputSend = document.createElement("input");
inputSend.type = "submit";
inputSend.value = "Enviar";

const inputHidden = document.createElement("input");
inputHidden.type = "hidden";
inputHidden.name = "id";

const form = document.createElement("form");
form.classList.add("crud-form");

const h2Form = document.createElement("h2");
h2Form.classList.add("crud-title");
h2Form.textContent = "Agregar Santo";

const br = document.createElement("br");
const brTwo = document.createElement("br");

const articleOne = document.createElement("article");

const articleTwo = document.createElement("article");

form.append(inputName,br,inputConstellation,brTwo,inputSend,inputHidden);

articleOne.append(h2Form,form);

const thName = document.createElement("th");
thName.textContent="Nombre";
const thConstellation = document.createElement("th");
thConstellation.textContent="Constelación";
const thActions = document.createElement("th");
thActions.textContent = "Acciones";

const tr = document.createElement("tr");

const thead = document.createElement("thead");

const table = document.createElement("table");
table.classList.add("crud-table");

const h2Table = document.createElement("h2");
h2Table.textContent = "ver Santos";

const tbody = document.createElement("tbody");

tr.append(thName,thConstellation,thActions);
thead.append(tr);
table.append(thead,tbody);

articleTwo.append(h2Table,table);

const section = document.getElementById("crud");

section.append(articleOne,articleTwo);


const trTemplate = document.createElement("tr");
const tdNameTemplate = document.createElement("td");
tdNameTemplate.classList.add("name");
tdNameTemplate.textContent="John";
const tdConstellationTemplate = document.createElement("td");
tdConstellationTemplate.classList.add("constellation");
const tdActionsTemplate = document.createElement("td");

const buttonEdit = document.createElement("button");
buttonEdit.classList.add("edit");
buttonEdit.textContent="Editar";
const buttonDelete = document.createElement("button");
buttonDelete.classList.add("delete");
buttonDelete.textContent = "Eliminar";
tdActionsTemplate.append(buttonEdit,buttonDelete);

trTemplate.append(tdNameTemplate,tdConstellationTemplate,tdActionsTemplate);

const template = document.querySelector("#crud-template");


template.appendChild(trTemplate);