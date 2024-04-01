const {Carrito} = require ("../../db")
const nodemailer = require("nodemailer");

const updateStateOrden = async (req, res) => {
     const {idDeCompra, email, estadoDelPedido} = req.body
    try{
        const ticket = await Carrito.findByPk(idDeCompra);
        if(!ticket) { return res.status(400).send("No se encontro ticket de compra!.")}

        ticket.estadoDelPedido = estadoDelPedido;

        await ticket.save();

        const contenidoCorreoDespachado = `Hola! Su pedido con el id: ${idDeCompra} ya ha sido despachado!
        pronto sera entregado y recibido en los detalles que asigno a su compra! Muchas gracias!`;
        const contenidoCorreoCancelado = `Hola! Nos entristece la mala noticia. Hemos confirmado la cancelación
        del pedido de compra con el id: ${idDeCompra}, espero volverte a ver pronto! Saludos.`

        if(estadoDelPedido === "despachado"){
            enviarCorreo(email, "ESTOY EN CAMINO!", contenidoCorreoDespachado);
        }

        if(estadoDelPedido === "cancelado"){
            enviarCorreo(email, "PEDIDO CANCELADO!", contenidoCorreoCancelado);
        }

        
        return res.status(200).json({message: "Se ha modificado exitosamente el estado del pedido!."})

    }catch(error){
        return res.status(500).json({error: "Error al modificar el estado de la orden de compra."})
    }
}

const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: "uuidstore@outlook.com",
      pass: "Henry!123",
    },
  });
  
  // Función para enviar el correo electrónico.
  function enviarCorreo(destinatario, asunto, mensaje) {
    // Opciones del correo electrónico
    const mailOptions = {
      from: "uuidstore@outlook.com",
      to: destinatario,
      subject: asunto,
      text: mensaje,
    };
  
    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error al enviar el correo electrónico:", error);
      } else {
        console.log("Correo electrónico enviado:", info.response);
      }
    });
  }

module.exports = {updateStateOrden}