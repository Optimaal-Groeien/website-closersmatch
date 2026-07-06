import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const fixes = [
  ['ÔÿàÔÿàÔÿàÔÿàÔÿà', '★★★★★'],
  ['v├│├│rdat', 'vóórdat'],
  ['v├│├│r', 'vóór'],
  ['strategie├½n', 'strategieën'],
  ['Commerci├½le', 'Commerciële'],
  ['commerci├½le', 'commerciële'],
  ['financi├½le', 'financiële'],
  ['carri├¿re.', 'carrière.'],
  ['carri├¿re', 'carrière'],
  ['cre├½ren', 'creëren'],
  ['Twee rollen. ├ëén ecosysteem.', 'Twee rollen. Één ecosysteem.'],
  ['├ëén', 'Één'],
  ['effici├½nte', 'efficiënte'],
  ['Effici├½nte', 'Efficiënte'],
  ['gekwalificeer├½', 'gekwalificeër'],
  ['gelijkwaardig├½', 'gelijkwaardigë'],
  ['├½nte', 'ënte'],
  ['├½nt', 'ënt'],
  ['├»nte', 'ënte'],
  ['├»nt', 'ënt'],
  ['├½val', 'ëval'],
  ['├½ren', 'ëren'],
  ['├½n', 'ën'],
  ['├½le', 'ële'],
  ['├½re', 'ëre'],
  ['├¿re', 'ère'],
  ['Ô£ô ', '✓ '],
  ['Ô£ô', '✓'],
  ['ÔÇô€', '–€'],
  ['ÔÇö', '—'],
  ['ÔÇô', '–'],
  ['Ôé¼', '€'],
  ['ÔåÆ', '→'],
  ['ÔÇó', '•'],
  ['Ô£ë', '⏱'],
  ['D├®', 'Dé'],
  ['├®├®n', 'één'],
  ['├®', 'é'],
];

const dirs = [
  'src/pages/nl',
  'src/pages/en',
];

for (const dir of dirs) {
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.astro'))) {
    const path = join(dir, file);
    let content = readFileSync(path, 'utf8');
    for (const [from, to] of fixes) {
      content = content.split(from).join(to);
    }
    writeFileSync(path, content, 'utf8');
    console.log('Fixed', path);
  }
}
