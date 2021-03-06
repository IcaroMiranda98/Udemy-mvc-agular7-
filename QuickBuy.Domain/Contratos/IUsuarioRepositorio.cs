﻿using QuickBuy.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Domain.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario ValidarLogin(Usuario usuario);
        Usuario ValidarCadastro(Usuario usuario);
    }
}
