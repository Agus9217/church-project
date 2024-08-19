import { NavItem } from "./interfaces";

export const navItem: NavItem[] = [
  {
    label: 'Sobre Nosotros',
    href: '/nosotros'
  },
  {
    label: 'Ministerios',
    href: '/ministerios',
    children: [
      {
        label: 'Piedra Angular',
        href: '/'
      },
      {
        label: 'Estimulos Espirituales',
        href: '/'
      },
      {
        label: 'Extremados',
        href: '/'
      },
      {
        label: 'Escuela EDI',
        href: '/'
      },
      {
        label: 'Interseción',
        href: '/'
      },
      {
        label: 'Grupos La Red',
        href: '/'
      },
      {
        label: 'M.A.A.O.C',
        href: '/'
      },
      {
        label: 'Mayordomia',
        href: '/'
      }
    ]
  },
  {
    label: 'Eventos',
    href: '/eventos'
  },
  {
    label: 'Contacto',
    href: '/contacto'
  }
]
