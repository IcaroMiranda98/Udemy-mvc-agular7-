using QuickBuy.Domain.Entidades;
using QuickBuy.Domain.Contratos;
using System;
using System.Collections.Generic;
using System.Text;
using QuickBuy.repository.Contexto;

namespace QuickBuy.repository.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(QuickBuyContexto quickBuyContexto) : base (quickBuyContexto)
        {

        }
    }
}
