using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Domain.Entidades;

namespace QuickBuy.repository.Config
{
    class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasKey(p => p.Id);

            builder
                .Property(p => p.Nome)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(p => p.Descricao)
                .IsRequired()
                .HasMaxLength(500);

            builder
                .Property(p => p.Preco)
                .IsRequired();
        }
    }
}
