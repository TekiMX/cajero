const data = [
    {
        user: "salvador",
        pass: "123",
        money: 200
    },
    {
        user: "miguel",
        pass: "123",
        money: 150
    },
    {
        user: "ana",
        pass: "123",
        money: 100
    }
]

const formInput = document.getElementById("formInput")

formInput.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value

    for (let index = 0; index < data.length; index++) {
        console.log(`index tiene este valor = ${index}`);
        if(data[index].user ===user && data[index].pass === password){
            localStorage.setItem("user", data[index].user)
            localStorage.setItem("money", data[index].money)
            console.log(data[index])
            window.location.href = "/cajero/cajero.html"
            break

        }else{
            console.log("Datos incorrectos");
            evento.preventDefault();
            alert(`Error de inicio de sesion, revisa tus datos`)
        }
        
    }
})