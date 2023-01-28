export default {
	myVar1: [],
	myVar2: {},
	autorizado: () => {
		//write code here
		if(ConsultaAutorizados.data.some(e => e.email === email_logueado.text))
			//Table1Copy.tableData = ConsultaTelefonos01.data;
			return "logedin";
		else
			return "notlogedin";
	},
	myFun2: async () => {
		//use async-await or promises
	}
}