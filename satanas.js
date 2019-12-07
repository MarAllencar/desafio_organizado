/*ETEC Professor Hor�cio Augusto da Silveira
Avalia��o de Design Digital � Segundo Bimestre � Usabilidade e Padr�es de Projeto

Nome: Mariane Alves de Alencar */



private void btnEspaço_Click(object sender, EventArgs e)
{
    double nb1;    /*banana = nb1*/ 
    double nb2;     /* choppe = nb2*/
    double lt;    /*guarana = lt*/
    string lt; 
    
    try /*comando importante, esse comando é para ficar um passo a frente do usuario que fez coisa errada*/
    {
        nb1 = Convert.ToDouble(txtnb1.Text); /*converte para double o texto do nb1*/
        lt = Math.Sqrt(nb1);  
        lt = Convert.ToString(lt);  /*converte para letras o resultado que está em lt*/
        txtResultado.Text = lt;
    } 
    catch(FormatException)
    {
         MessageBox.Show("Formata��o Errada.");
    }
}


/*1.	Organize o c�digo acima segundo o que foi explicado nas aulas de t�cnicas de programa��o afim de garantir legibilidade e
 sustentabilidade do c�digo.

2.	Desenhe uma classe que implemente o c�digo acima como um m�todo. 

- alguns codigos foram alterados, devido a pouca verificação*/
