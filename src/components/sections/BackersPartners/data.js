import capital from '@/assets/icons/backers-partners/investors/capital.svg';
import venture from '@/assets/icons/backers-partners/investors/venture.svg';
import kumeka from '@/assets/icons/backers-partners/investors/kumeka.svg';
import circle from '@/assets/icons/backers-partners/partners/circle.svg';
import metaplex from '@/assets/icons/backers-partners/partners/metaplex.svg';
import booster from '@/assets/icons/backers-partners/partners/booster.svg';
import sanctum from '@/assets/icons/backers-partners/partners/sanctum.svg';
import solana from '@/assets/icons/backers-partners/grants/solana.svg';
import anza from '@/assets/icons/backers-partners/grants/anza.svg';
import superteam from '@/assets/icons/backers-partners/grants/superteam.svg';
import jupiter from '@/assets/icons/backers-partners/integrations/jupiter.svg';
import orca from '@/assets/icons/backers-partners/integrations/orca.svg';
import raydium from '@/assets/icons/backers-partners/integrations/raydium.svg';
import serum from '@/assets/icons/backers-partners/integrations/serum.svg';

export const TABS = [
  { id: 'all', label: 'All', count: 14 },
  { id: 'investor', label: 'Investor', count: 3 },
  { id: 'partner', label: 'Partner', count: 4 },
  { id: 'grant', label: 'Grant', count: 3 },
  { id: 'integration', label: 'Integration', count: 3 },
];

export const ITEMS = [
  { id: 1, name: '3X Capital', type: 'investor', logo: capital },
  { id: 2, name: 'Venture Launch', type: 'investor', logo: venture },
  { id: 3, name: 'Kumeka Team', type: 'investor', logo: kumeka },

  { id: 4, name: 'Circle', type: 'partner', logo: circle },
  { id: '4a', name: 'Circle', type: 'partner', logo: circle },
  { id: 5, name: 'Metaplex', type: 'partner', logo: metaplex },
  { id: 6, name: 'BD Booster', type: 'partner', logo: booster },
  { id: 7, name: 'Sanctum', type: 'partner', logo: sanctum },

  { id: 8, name: 'Solana Foundation', type: 'grant', logo: solana },
  { id: 9, name: 'Anza Labs', type: 'grant', logo: anza },
  { id: 10, name: 'Superteam', type: 'grant', logo: superteam },

  { id: 11, name: 'Jupiter', type: 'integration', logo: jupiter },
  { id: 12, name: 'Orca', type: 'integration', logo: orca },
  { id: 13, name: 'Raydium', type: 'integration', logo: raydium },
  { id: 14, name: 'Serum', type: 'integration', logo: serum },
];
