using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                if (usuario.Email == "icaro@gmail.com" && usuario.Senha == "12345677") 
                    return Ok();

                return BadRequest("Usuário ou senha inválido.");
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost]
        public ActionResult Post()
        {
            try
            {
                return Ok();
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


    }
}
