using QuickBuy.Domain.Entidades;
using QuickBuy.Domain.Contratos;
using System;
using System.Collections.Generic;
using System.Text;
using QuickBuy.repository.Contexto;

namespace QuickBuy.repository.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }
    }
}
