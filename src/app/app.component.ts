import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  
  filmesAcao = [
    { titulo: 'Os Mercenários 4', descricao: 'Munidos com todas as armas inimagináveis, os Mercenários são a última linha de defesa do mundo.', imagem: 'https://s2-gshow.glbimg.com/XlMfBS5dN6jzHnHltc0K6FD43Ts=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/8/d/VBUTwzR02sQZVBCJS4rQ/os-mercenarios-4.jpg' },
    { titulo: 'Som da Liberdade', descricao: 'Um ex-agente federal embarca em uma perigosa missão para salvar uma menina dos cruéis traficantes de crianças.', imagem: 'https://jardimdasamericas.com.br/uploads/2023/09/capa-filme-som-da-liberdade-4e854-large.jpg' },
    { titulo: 'Homem-Aranha: Através do Aranhaverso', descricao: 'Depois de se reunir com Gwen Stacy, Homem-Aranha é jogado no multiverso, onde ele encontra uma equipe encarregada de proteger sua própria existência.', imagem: 'https://br.web.img3.acsta.net/pictures/23/05/17/22/43/4869322.jpg' },
    { titulo: 'Velozes e Furiosos 10', descricao: 'Dom Toretto e sua família precisam lidar com o adversário mais letal que já enfrentaram.', imagem: 'https://oregional.com.br/media/blog/e693dc00583c991e88617b6c8fb69f8c.jpg' },
    { titulo: 'Dungeons & Dragons: Honra Entre Rebeldes', descricao: 'Um ladrão e um bando de aventureiros embarcam em uma jornada épica para recuperar uma relíquia.', imagem: 'https://www.cine14bis.com.br/site/wp-content/uploads/2023/04/11029_medio.jpg' },
  ];

  filmesComedia = [
    { titulo: 'Inatividade Paranormal', descricao: 'Malcolm e Kisha se mudam para a casa dos sonhos, mas logo percebem que não estão sozinhos. Não porque a casa seja assombrada, mas porque Kisha está possuída por demônios. Para salvá-la, Malcolm contrata um grupo de paranormais', imagem: 'https://br.web.img3.acsta.net/medias/nmedia/18/94/14/75/20420264.jpg' },
    { titulo: 'Não Olhe para Cima', descricao: 'Dois astrônomos medíocres descobrem que em poucos meses um meteorito destruirá o planeta Terra.', imagem: 'https://br.web.img2.acsta.net/pictures/21/12/06/21/17/3973076.jpg' },
    { titulo: 'Super Mario Bros. O Filme', descricao: 'Mario e seu irmão Luigi são encanadores do Brooklyn, em Nova York.', imagem: 'https://br.web.img2.acsta.net/pictures/23/04/03/19/45/2854005.jpg' },
    { titulo: 'Os Farofeiro', descricao: 'Quatro colegas de trabalho se programam para curtir o feriado prolongado em uma casa de praia.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/2/25/Os_Farofeiros.jpg' },
    { titulo: 'Minions', descricao: 'Seres amarelos milenares, os minions têm uma missão: servir aos maiores vilões.', imagem: 'https://br.web.img3.acsta.net/pictures/14/11/04/14/07/517227.jpg' },
    
  ];


  filmesRomance = [
    { titulo: 'Elementos', descricao: 'Em uma cidade onde os habitantes de fogo, água, terra e ar convivem, uma jovem mulher flamejante e um rapaz que vive seguindo o fluxo descobrem algo surpreendente, porém elementar: o quanto eles têm em comum.', imagem: 'https://static.wixstatic.com/media/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg/v1/fill/w_700,h_1000,al_c,q_85,usm_0.66_1.00_0.01/737e63_a9c4fd0ebd9648dfbeecdafd328ea33c~mv2.jpg' },
    { titulo: 'Continência ao Amor', descricao: 'Uma cantora se casa por conveniência com um militar que está prestes a ir para a guerra, mas uma tragédia transforma esse relacionamento de fachada em realidade.', imagem: 'https://m.media-amazon.com/images/I/61O+fuT4fGL._AC_UF1000,1000_QL80_.jpg' },
    { titulo: 'Entergalactic', descricao: 'O artista Jabari tenta equilibrar amor e sucesso ao se mudar para um apartamento dos sonhos e se apaixonar pela nova vizinha.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/c3/Entergalactic.png' },
    { titulo: 'Como Eu Era Antes de Você', descricao: 'De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.', imagem: 'https://br.web.img2.acsta.net/pictures/16/02/03/19/11/303307.jpg' },
    { titulo: 'Kimi no na wa', descricao: 'Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/7/7f/Kimi-no-Na-wa-poster.jpg' },
    
  ];
}