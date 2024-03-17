import {gql} from "graphql-request";

export const GET_VEHICLES = gql`
  {
    vehicles (lang: "ru") {
      title
      name
      id
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

interface Icons {
    small: string;
    medium: string;
    large: string;
}

interface Type {
    name: string;
    title: string;
    icons: {
        default: string;
    };
}

interface Nation {
    name: string;
    title: string;
    color: string;
    icons: Icons;
}

export interface Vehicle {
    title: string;
    description: string;
    icons: Icons;
    level: number;
    type: Type;
    nation: Nation;
}

export interface FilterPayload {
    levels: number[];
    nations: string[];
    types: string[];
}
export const japan = "//glossary.korabli.su/icons/nation_flags/large/flag_Japan_dc7a62826070d782f60b959d0b00fa9548d97a3893f08824d2e2dece8df3ce78.png";
export const usa = "//glossary.korabli.su/icons/nation_flags/large/flag_USA_bfe874dbd91cdd9e7b77e378d7efeb221931b9b25d24e79a138fe4801050966c.png";
export const ussr = "//glossary.korabli.su/icons/nation_flags/large/flag_Russia_a23dac134108e86530943971aed79d13fb6eab45748b539826c3538662bfe5d1.png";
export const germany = "//glossary.korabli.su/icons/nation_flags/large/flag_Germany_6ebc035001d082f9cc22317e1184be7806ecf34c7b2857ed65fececc36ec624e.png";
export const uk = "//glossary.korabli.su/icons/nation_flags/large/flag_United_Kingdom_a1656b0242541a0e42ecb717150f626c90a4847a097a1088de38409527787636.png";
export const france = "//glossary.korabli.su/icons/nation_flags/large/flag_France_a1658fa7ce53d10df1b95e71e667a1aa32f56b0909beb7404e20a0ec5b82af07.png";
export const pan_asia = "//glossary.korabli.su/icons/nation_flags/large/flag_Pan_Asia_43c01cae40c13f6ec165ebef027a7fada24375ac05e018aaa9068ebfef2d8915.png";
export const italy = "//glossary.korabli.su/icons/nation_flags/large/flag_Italy_1c3ee585f3132d89f71ffadfbbf529b23cb7acade1c1d5b6f9be5687b7770dc8.png";
export const commonwealth = "//glossary.korabli.su/icons/nation_flags/large/flag_Commonwealth_8b4d3ea923bbcff5194ed7ba63369ff3f8067581b03b4f528bb75b516df40d31.png";
export const pan_america = "//glossary.korabli.su/icons/nation_flags/large/flag_Pan_America_cd8032e6cfcd6850d0a256810ca328539b97d01d2091b42e8376cfe033a774cb.png";
export const europe = "//glossary.korabli.su/icons/nation_flags/large/flag_Europe_f0cc09a6c46f35f01c16395f2e57e67441930ee06a9b3ad57763620493c58054.png";
export const netherlands = "//glossary.korabli.su/icons/nation_flags/large/flag_Netherlands_1965c4d9d9d6583d4e78729ef6d079e59f074f3f9e98cab6a0cb3fe2e2f93698.png";
export const spain = "//glossary.korabli.su/icons/nation_flags/large/flag_Spain_e7b90b91cbcbd6ea2191c134e9713dbcb0aaebf0c670911f8a527610fcdf293a.png";

