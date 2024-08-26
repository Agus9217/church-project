import { NavItem } from "./interfaces";

export const navItem: NavItem[] = [
  {
    label: 'Nosotros',
    href: '/nosotros'
  },
  {
    label: 'Eventos',
    href: '/eventos'
  },
  {
    label: 'Ministerios',
    href: '/ministerios',
    children: [
      {
        label: 'Piedra Angular',
        href: '/piedra-angular'
      },
      {
        label: 'Estimulos Espirituales',
        href: '/estimulos-espirituales'
      },
      {
        label: 'Mayordomia',
        href: '/mayordomia'
      },
      {
        label: 'Grupos La red',
        href: '/grupos'
      },
      {
        label: 'Extremados',
        href: '/extremados'
      },
      {
        label: 'M.A.A.O.C',
        href: '/culto'
      },
      {
        label: 'Intersecion',
        href: '/intersecion'
      },
      {
        label: 'Escuela EDI',
        href: '/escuela-edi'
      },
    ]
  },
  {
    label: 'Soy nuevo',
    href: '/contacto'
  }
]