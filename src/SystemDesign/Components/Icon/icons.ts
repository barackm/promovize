import PlusSquare from '@/assets/SFSymbols/plus.square.svg';
import PlusAppFill from '@/assets/SFSymbols/plus.app.fill.svg';
import SquareOnSquare from '@/assets/SFSymbols/square.on.square.svg';
import Eye from '@/assets/SFSymbols/eye.svg';
import EyeSlash from '@/assets/SFSymbols/eye.slash.svg';
import Envelope from '@/assets/SFSymbols/envelope.svg';
import KeyHorizontal from '@/assets/SFSymbols/key.horizontal.svg';
import ExclamationmarkTriangle from '@/assets/SFSymbols/exclamationmark.triangle.svg';

import { SvgProps } from 'react-native-svg';

export type Name =
  | 'plus.square'
  | 'plus.app.fill'
  | 'square.on.square'
  | 'eye'
  | 'eye.slash'
  | 'envelope'
  | 'key.horizontal'
  | 'exclamationmark.triangle';

export const ICONS: Record<Name, React.FC<SvgProps>> = {
  'plus.square': PlusSquare,
  'plus.app.fill': PlusAppFill,
  'square.on.square': SquareOnSquare,
  eye: Eye,
  'eye.slash': EyeSlash,
  envelope: Envelope,
  'key.horizontal': KeyHorizontal,
  'exclamationmark.triangle': ExclamationmarkTriangle,
};
