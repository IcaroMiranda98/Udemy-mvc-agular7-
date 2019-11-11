using QuickBuy.Domain.Entidades;
using QuickBuy.Domain.Contratos;
using System;
using System.Collections.Generic;
using System.Text;
using QuickBuy.repository.Contexto;
using System.Linq;

namespace QuickBuy.repository.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public Usuario _usuario { get; set; }
        public UsuarioRepositorio(QuickBuyContexto quickBuyContext) : base(quickBuyContext)
        {
            
        }

        public Usuario ValidarLogin(Usuario usuario)
        {
            _usuario = QuickBuyContexto.Usuarios.FirstOrDefault(usuarioRetorno => usuarioRetorno.Email == usuario.Email &&
                                                                        usuarioRetorno.Senha == usuario.Senha);

            return _usuario;


        }

        public Usuario ValidarCadastro(Usuario usuario)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(usuarioRetorno => usuarioRetorno.Email == usuario.Email);

        }
    }
}
