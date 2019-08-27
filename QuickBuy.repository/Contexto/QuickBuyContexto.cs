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

            base.OnModelCreating(modelBuilder);
        }
    }
}
