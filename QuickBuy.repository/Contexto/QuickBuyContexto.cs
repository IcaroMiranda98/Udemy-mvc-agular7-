using Microsoft.EntityFrameworkCore;
using QuickBuy.Domain.Entidades;
using QuickBuy.repository.Config;

namespace QuickBuy.repository.Contexto
{
    public class QuickBuyContexto: DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
        //public DbSet<Forma> Usuarios { get; set; }

        public QuickBuyContexto(DbContextOptions option) : base(option)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration() );
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration() ) ;
            modelBuilder.ApplyConfiguration(new PedidoConfiguration() );
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration() );
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration() );

            modelBuilder.Entity<FormaPagamento>().HasData(
                new FormaPagamento()
                {
                    Id = 1,
                    Nome = "Boleto",
                    Descricao = "Forma de Pagamento Boleto"
                },
                new FormaPagamento()
                {
                    Id = 2,
                    Nome = "Cartao de Crédito",
                    Descricao = "Forma de Pagamento Cartão de Crédito"
                },
                new FormaPagamento()
                {
                    Id = 3,
                    Nome = "Depósito",
                    Descricao = "Forma de Pagamento Depósito"
                }

            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
