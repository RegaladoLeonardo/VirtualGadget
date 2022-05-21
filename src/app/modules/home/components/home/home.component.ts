import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './clases.css']
})
export class HomeComponent implements OnDestroy{

  public linkCss: Element | null;
  public valores: {nombre: string, desc: string}[];


  constructor() {
    this.linkCss = document.querySelector('#style-global');
    this.linkCss?.setAttribute('href', './assets/styles/home.css');
    this.valores = [
      {nombre:'Amor', desc:'Tanto en nuestro trabajo como en proyectos demostramos nuestro arduo trabajo dando todo el amor posible a nuestros programas y trabajos por hacer'},
      {nombre:'Amistad', desc:'En nuestra empresa el lugar de trabajo siempre es ameno y tranquilo para todos los trabajadores, además, mantenemos un ambiente amistoso para mayor rendimiento y sea más agradable el ambiente.' },
      {nombre:'Confianza', desc:'Siempre mantenemos un ambiente de confianza en nuestro lugar de trabajo con nuestros empleados para transmitir esa confianza a nuestros clientes, además, somos la empresa en la que los clientes pueden confiar en nosotros debido a nuestro gran equipo.' },
      {nombre:'Fraternidad', desc:'Buscamos estar en un lugar donde todos nos sintamos como hermanos trabajando en un mismo equipo y tener un mejor rendimiento a la hora de hacer proyectos.' },
      {nombre:'Honor', desc:'A la hora de desarrollar los productos pedidos por el cliente damos todo de nosotros para mantener el honor de la empresa en alto y adquirir buenas criticas y recomendaciones de nuestros clientes.' },
      {nombre:'Honradez', desc:'Cuando trabajamos en el producto solicitado lo hacemos con toda honradez ya que un buen proyecto siempre sale mejor usando este tipo de valores.' },
      {nombre:'Justicia', desc:'Somos muy justos con nuestros trabajadores para que puedan dar lo mejor de ellos y podamos dar lo mejor de nosotros en el producto final.' },
      {nombre:'Solidaridad', desc:'Somos muy solidarios con nuestro equipo y con los clientes al tratar de entender la razón de las cosas y el por qué piden lo que solicitan .' },
      {nombre:'Paz', desc:'En nuestro lugar de trabajo buscamos siempre mantener un ambiente de paz para que el equipo y los clientes se sientan más relajados y seguros al trabajar o contratar los servicios de nuestra empresa.' },
      {nombre:'Respeto', desc:'Somos respetuosos al dirigirnos con nuestro equipo y clientes para mantener un ambiente pacifico y seguro para las dos partes.' },
      {nombre:'Tolerancia', desc:'Somos tolerantes con nuestro equipo ante las situaciones difíciles y buscamos entender lo mejor posible la situación analizándola, además, somos muy tolerantes en tanto a las peticiones del cliente dentro de un rango de tolerancia.' },



                  ];
  }

  ngOnDestroy(): void {
    this.linkCss?.setAttribute('href', './assets/styles/default.css');
  }

}
