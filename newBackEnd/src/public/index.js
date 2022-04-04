let socket = io();
let chatBox = document.getElementById('chatBox');
let log = document.getElementById('log');
let user;
/*alert identificacion */
Swal.fire(
    {
        title :'Identificate',
        input:'text',
        allowOutsideClick: false,
        inputValidator:(value)=>{
        return !value && "hay que identificarse primero"
        }
    }
  ).then(result=>{
      user = result.value;
  })

  chatBox.addEventListener('keyup',evt=>{
      if(evt.key==="Enter"){
          if(chatBox.value.trim().length>0){
              socket.emit('message',{user,message:chatbox.value.trim()})
              chatBox.value="";
          }
      }
  })
  /*Sockets */

  socket.on('log',data=>{
      let messages ="";
      data.array.forEach(log => {
          messages = messages + `${log.user} dice: ${log.message}</br>`
      })
      log.innerHTML=messages;
  })