using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contratos;
using QuickBuy.Domain.Entidades;
using System;


namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        private Usuario _usuario;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }
        [HttpPost("ValidarLogin")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                _usuario = _usuarioRepositorio.ValidarLogin(usuario);
                if (_usuario != null) 
                    return Ok(_usuario);

                return BadRequest("Usuário ou senha inválido.");
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost]
        public ActionResult Post([FromBody]Usuario usuario)
        {
            try
            {
                var validarCadastro = _usuarioRepositorio.ValidarCadastro(usuario);

                if (validarCadastro != null)
                    return BadRequest("Usuário já cadastrado.");
                    
                _usuarioRepositorio.Adicionar(usuario);
                return Created("api/usuario", usuario);
               
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


    }
}
