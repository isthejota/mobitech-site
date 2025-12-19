
import { Product, NavItem, ExternalSite } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Celulares', href: '#celulares' },
  { label: 'Tablets', href: '#tablets' },
  { label: 'Comparativos', href: '#educativo' },
];

export const SMARTPHONES: Product[] = [
  {
    id: 's1',
    name: 'Xiaomi Redmi Note 14',
    image: 'https://mobi-like.com/uploads/product/48800/48881/983b6c21dfb811efa44fa628695216f3_2403a77fe5e611efa44fa628695216f3.jpg',
    category: 'smartphone',
    highlight: 'Gigante em vendas com ótimo equilíbrio entre desempenho, bateria e custo-benefício.',
    affiliateUrl: 'https://mercadolivre.com/sec/2iMyuRH'
  },
  {
    id: 's2',
    name: 'Samsung Galaxy A16',
    image: 'https://pcdiga-prod.eu.saleor.cloud/media/thumbnails/products/A16_Black_368dfbf9_thumbnail_4096.jpg',
    category: 'smartphone',
    highlight: 'Um dos mais vendidos da linha Samsung, forte em tela e autonomia.',
    affiliateUrl: 'https://mercadolivre.com/sec/2jR5MYe'
  },
  {
    id: 's3',
    name: 'Motorola Moto G35 5G',
    image: 'https://www.telefonshoppen.se/bilder/artiklar/motorola-moto-g35-5g-dual-sim-4gb-ram-128gb-gron_2.jpg',
    category: 'smartphone',
    highlight: 'Clássico queridinho da família Moto G com 5G e bateria sólida.',
    affiliateUrl: 'https://mercadolivre.com/sec/21ryRdL'
  },
  {
    id: 's4',
    name: 'Motorola Moto G15 256GB',
    image: 'https://img.joomcdn.net/5dd46c2fcbddf0cb9d241247757dcdfe611b9553_original.jpeg',
    category: 'smartphone',
    highlight: 'Armazenamento generoso e boa performance geral.',
    affiliateUrl: 'https://mercadolivre.com/sec/1ZvqUWQ'
  },
  {
    id: 's5',
    name: 'Infinix Smart 10 4GB RAM 256GB',
    image: 'https://www.gizmochina.com/wp-content/uploads/2025/05/Infinix-Smart-10-Render-2.jpg',
    category: 'smartphone',
    highlight: 'Surpresa do momento com grande capacidade de armazenamento e bateria.',
    affiliateUrl: 'https://mercadolivre.com/sec/1nKgLci'
  },
  {
    id: 's6',
    name: 'Apple iPhone 11',
    category: 'smartphone',
    image: 'https://i.ebayimg.com/images/g/Mc8AAOSwRLdg9wup/s-l1600.jpg',
    highlight: 'Modelo top de geração anterior ainda muito procurado no marketplace.',
    affiliateUrl: 'https://mercadolivre.com/sec/2588PNW'
  }
];

export const TABLETS: Product[] = [
  {
    id: 't1',
    name: 'Xiaomi Redmi Pad 2',
    image: 'https://yandex-images.clstorage.net/ewZB56082/9bcf339YEWb/yi4Ay37wrA1rvcGuMRcWxYYA9bTU_CVzyqpXPG2eySZ_ZBn-6KuU1wystRt42V8v-sjEvVLyJy6wMfh__jMUCs9tRUw_ILoefu2R_ecAR8PBE3XxV_v5P4OnDHJnF1As8S3fbX9_AITK-eON5MIPdWsUUeCG6Dn-rLvvO7UvC1QH9d9Vt3AliCFwgD8yHZ4fC4m0sJgy8_gGaon46ZcaqHFqlKRwMoJHEDFqAiiMmXrsEVYjhGc0sag9qTI9bonfiPvfVfv7qQvreMU2sJcSmsPEfXQbM3_zDusNOC7a0Gs271wg9bJCAds66o-oidE_7BUR60puMv1vtGe7-6yKHsw12dG9vOpFKTrLfzKaHFSGRDC3l3PwcIakyDihUNth-STXJL5whccU_GnPokzeeGaWkqGCpvJzJXEosPpoxRxA8RqT9_9iAWG7SbU0G9gfgMD2v5Ryt_bC4470ZV8Y7XorXKF-OstKHTGihaNLl7isWJ0qimc4eet66PN8qIxUinbZFLq-oUKvdQG3dp3Q2EGJ_bjdP3IzjaSI-6JRkuGz4tcsNv_HRJHy7A8uDFP2KhwQK4jq_3tvOCIytmxLlIN72tLyPa_B4rMM_LIS31PGAjc5UXl6dMJsDj8mnxYvsaKdpvJ-x8kcdK4H6c9e-awQWqINpXl6Ynwn9P8gA5lCc1pb_fXtQql_w3ZwXdRdRgj0vBQ6uLyNa8S471WUIP-kHWt48A_A1DWjjm-NG7CrH9mlyiYz-iX0Lfj6JsYdDjLTVD-95ksqfICx-NRRUs0G_7fT-_04hmxH9yle3GB5pBGpfHfCABj_YUZvhJp949RdbcNqNH5qMGzw9aEJEwKxVx1-P2TAoXmO8XCUHxKKxH1wlHw88sAtD7VqkVenfSRb5b0zTU9TtWPN4gxfO2NakCWOJfj1JTkqc3ztBZ0IcNEZfzdtw6K6jHsxnx9TA4l88ZmwMrFBLYd2bA'
    category: 'tablet',
    highlight: 'Uma das tablets mais procuradas no Mercado Livre: desempenho fluido, ótimo suporte de atualizações e ótima tela grande para consumo de mídia e produtividade.',
    affiliateUrl: 'https://mercadolivre.com/sec/2bAxF1c'
  },
  {
    id: 't2',
    name: 'Samsung Galaxy Tab A11',
    image: 'https://avatars.mds.yandex.net/get-mpic/1724439/2a00000199ce122719f7957ab23dc3bf4761/orig',
    category: 'tablet',
    highlight: 'Samsung tradicional no segmento, muito vendido devido ao suporte confiável, tela de qualidade e marca forte no Brasil.',
    affiliateUrl: 'https://mercadolivre.com/sec/2DDsLMh'
  },
  {
    id: 't3',
    name: 'Positivo Vision Tab 10',
    image: 'https://i.pinimg.com/originals/ff/22/9a/ff229a616abc0c91ac1661237b037f3b.webp',
    category: 'tablet',
    highlight: 'Tablet com ótima avaliação custo-benefício, ideal para estudos, vídeos e tarefas básicas, com boa bateria e espaço de armazenamento.',
    affiliateUrl: 'https://mercadolivre.com/sec/22AUGNj'
  },
  {
    id: 't4',
    name: 'Apple iPad 11ª Geração A16',
    image: 'https://maykop.iprofishop.ru/upload/rbs.moyskladstocks/files/ab00eee6-ffdd-4818-bc9f-1a0e52be1c29/39a0f5fc11df7fc11582f73d918ae006/ce9/82zz359d0g89833t1ndwpv5oxalgojj5.jpeg',
    category: 'tablet',
    highlight: 'Melhor equilíbrio geral entre desempenho e preço — ótimo para produtividade, multimídia e uso diário.',
    affiliateUrl: 'https://mercadolivre.com/sec/2r9iTdx'
  }
];

export const EXTERNAL_SITES: ExternalSite[] = [
  {
    name: 'BRSmart',
    description: 'Descubra como a tecnologia pode transformar sua rotina, trazendo economia e praticidade para o seu dia a dia.',
    url: 'https://brsmart.vercel.app/',
    icon: '🏠'
  },
  {
    name: 'Brinca Smart',
    description: 'Descubra uma curadoria exclusiva de brinquedos que estimulam o desenvolvimento cognitivo, a criatividade e o futuro do seu pequeno.',
    url: 'https://brincasmart.vercel.app/',
    icon: '🛴'
  },
  {
    name: 'TechCore',
    description: 'Escolha a máquina que vai elevar seu nível. De gamers a profissionais, entregamos a melhor curadoria de hardware do Brasil.',
    url: 'https://techcore.vercel.app/',
    icon: '🖥️'
  }
];
