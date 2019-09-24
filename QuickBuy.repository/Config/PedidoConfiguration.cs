using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entidades;

namespace QuickBuy.repository.Config
{
    class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.UsuarioId)
                .IsRequired();

            builder.Property(p => p.NumeroEndereco)
                .IsRequired();

            builder.Property(p => p.Cidade)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(p => p.Estado)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(p => p.EnderecoCompleto)
                .IsRequired()
                .HasMaxLength(200);
        }
    }
}
