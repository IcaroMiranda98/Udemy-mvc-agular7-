using QuickBuy.Domain.Entidades;

namespace QuickBuy.Domain.Entidades
{
    public class FormaPagamento : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public bool EhBoleto
        {
            get { return Id == (int)Enumerados.TipoFormaPagamentoEnum.Boleto; }
        }
        public bool EhCartaoCredito
        {
            get { return Id == (int)Enumerados.TipoFormaPagamentoEnum.CartaoCredito; }
        }
        public bool EhDeposito
        {
            get { return Id == (int)Enumerados.TipoFormaPagamentoEnum.Deposito; }
        }
        public bool NaoDefinido
        {
            get { return Id == (int)Enumerados.TipoFormaPagamentoEnum.NaoDefinido; }
        }

        public override void Validate()
        {
            throw new System.NotImplementedException();
        }
    }
}
