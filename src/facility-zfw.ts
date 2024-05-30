import type { Facility } from "@/types";

const fac: Facility = {
  id: "KZFW",
  faa_id: "ZFW",
  name: "Fort Worth ARTCC",
  logo: "https://zfw.nyc3.cdn.digitaloceanspaces.com/New%20Logo.png",
  skipMajor: false,
  domain: "zfwartcc.net",
  apiUrl: "https://api.zfwartcc.net",
  devApiUrl: "https://api.dev.zfwartcc.net",
  certificationsHideNone: false,
  resources: ["SOPs", "LOAs", "vATIS", "Misc"],
  customRoutes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/facilities/zfw/views/pages/Homepage.vue"),
    },
  ],
  roles: [
    {
      name: "ATM",
      role: "atm",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "DATM",
      role: "datm",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "TA",
      role: "ta",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "EC",
      role: "ec",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "FE",
      role: "fe",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "WM",
      role: "wm",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "Events Team",
      role: "events",
      canGrant: ["atm", "datm", "ec", "wm"],
    },
    {
      name: "Facilities Team",
      role: "facilities",
      canGrant: ["atm", "datm", "fe", "wm"],
    },
    {
      name: "Web Team",
      role: "web",
      canGrant: ["atm", "datm", "wm"],
    },
    {
      name: "Instructor",
      role: "ins",
      canGrant: ["atm", "datm", "ta", "wm"],
    },
    {
      name: "Mentor",
      role: "mtr",
      canGrant: ["atm", "datm", "ta", "wm"],
    },
  ],
  boundaries: {
    center: [
      [35.829167, -100.000001],
      [35.816667, -98.5],
      [35.883333, -98.016667],
      [35.925, -97.883333],
      [35.491667, -97.583333],
      [35.458333, -97.083333],
      [35.65, -96.404167],
      [35.870833, -96.05],
      [36.016667, -95.6125],
      [35.654167, -95.000001],
      [35.383333, -95.000001],
      [35.066667, -95.000001],
      [34.691667, -94.783333],
      [34.533333, -94.533333],
      [34.033333, -93.541667],
      [33.95, -93.158333],
      [33.004167, -91.9],
      [32.283333, -91.688889],
      [32.283333, -92.258333],
      [31.558333, -93.320833],
      [31.572222, -94.2],
      [31.466667, -95.983333],
      [31.204167, -96.683333],
      [31.2, -97.2],
      [31.2125, -97.5125],
      [31.375, -97.7125],
      [31.390278, -97.794444],
      [31.383333, -99.466667],
      [30.983333, -100.55],
      [31.283333, -102.15],
      [31.65, -103.333333],
      [32.033333, -103.8],
      [32.466667, -103.933333],
      [33.000001, -103.8],
      [33.383333, -103.8],
      [33.402778, -103.691667],
      [33.775, -103.366667],
      [34.316667, -102.8],
      [34.55, -102.325],
      [34.6, -102.000001],
      [34.466667, -100.75],
      [34.866667, -100.316667],
      [35.333333, -100.000001],
      [35.829167, -100.000001],
    ],
  },
  center: [33.56, -97.84444],
  defaultZoom: 6,
  airports: [
    { icao: "KABI", name: "ABILENE RGNL", latitude: 32.4113, longitude: -99.6819 },
    { icao: "KACT", name: "WACO RGNL", latitude: 31.6122, longitude: -97.2303 },
    { icao: "KADH", name: "ADA RGNL", latitude: 34.8043, longitude: -96.6712 },
    { icao: "KADM", name: "ARDMORE MUNI", latitude: 34.3039, longitude: -97.0206 },
    { icao: "KADS", name: "ADDISON", latitude: 32.9686, longitude: -96.8364 },
    { icao: "KAFW", name: "PEROT FLD/FORT WORTH ALLIANCE", latitude: 32.9904, longitude: -97.3194 },
    { icao: "KAGO", name: "RALPH C WEISER FLD", latitude: 33.2275, longitude: -93.217 },
    { icao: "KASL", name: "HARRISON COUNTY", latitude: 32.5205, longitude: -94.3078 },
    { icao: "KATA", name: "HALL-MILLER MUNI", latitude: 33.1025, longitude: -94.195 },
    { icao: "KAXS", name: "ALTUS/QUARTZ MOUNTAIN RGNL", latitude: 34.6988, longitude: -99.3385 },
    { icao: "KBAD", name: "BARKSDALE AFB", latitude: 32.5019, longitude: -93.6626 },
    { icao: "KBPG", name: "BIG SPRING MC MAHON-WRINKLE", latitude: 32.2126, longitude: -101.522 },
    { icao: "KBQP", name: "MOREHOUSE MEML", latitude: 32.7561, longitude: -91.8806 },
    { icao: "KBWD", name: "BROWNWOOD RGNL", latitude: 31.7936, longitude: -98.9565 },
    { icao: "KCDH", name: "HARRELL FLD", latitude: 33.6228, longitude: -92.7634 },
    { icao: "KCDS", name: "CHILDRESS MUNI", latitude: 34.4338, longitude: -100.288 },
    { icao: "KCHK", name: "CHICKASHA MUNI", latitude: 35.0971, longitude: -97.9677 },
    { icao: "KCLK", name: "CLINTON RGNL", latitude: 35.5383, longitude: -98.9328 },
    { icao: "KCNW", name: "TSTC WACO", latitude: 31.6378, longitude: -97.0741 },
    { icao: "KCOM", name: "COLEMAN MUNI", latitude: 31.8411, longitude: -99.4036 },
    { icao: "KCPT", name: "CLEBURNE RGNL", latitude: 32.3537, longitude: -97.4337 },
    { icao: "KCRS", name: "C DAVID CAMPBELL FLD-CORSICANA MUNI", latitude: 32.0281, longitude: -96.4006 },
    { icao: "KCSM", name: "CLINTON/SHERMAN", latitude: 35.3398, longitude: -99.2005 },
    { icao: "KCWC", name: "KICKAPOO DOWNTOWN", latitude: 33.8606, longitude: -98.4904 },
    { icao: "KDAL", name: "DALLAS LOVE FLD", latitude: 32.8459, longitude: -96.8509 },
    { icao: "KDEQ", name: "J LYNN HELMS SEVIER COUNTY", latitude: 34.047, longitude: -94.3994 },
    { icao: "KDFW", name: "DALLAS-FORT WORTH INTL", latitude: 32.8972, longitude: -97.0377 },
    { icao: "KDTN", name: "SHREVEPORT DOWNTOWN", latitude: 32.5408, longitude: -93.7438 },
    { icao: "KDTO", name: "DENTON ENTERPRISE", latitude: 33.202, longitude: -97.1991 },
    { icao: "KDUA", name: "DURANT RGNL/EAKER FLD", latitude: 33.9397, longitude: -96.3951 },
    { icao: "KDUC", name: "HALLIBURTON FLD", latitude: 34.4709, longitude: -97.9599 },
    { icao: "KDYS", name: "DYESS AFB", latitude: 32.4185, longitude: -99.8565 },
    { icao: "KELD", name: "SOUTH ARKANSAS RGNL AT GOODWIN FLD", latitude: 33.2212, longitude: -92.8118 },
    { icao: "KELK", name: "ELK CITY RGNL BUSINESS", latitude: 35.4308, longitude: -99.3943 },
    { icao: "KETN", name: "EASTLAND MUNI", latitude: 32.4149, longitude: -98.8097 },
    { icao: "KFDR", name: "FREDERICK RGNL", latitude: 34.3521, longitude: -98.9839 },
    { icao: "KFSI", name: "HENRY POST AAF (FORT SILL)", latitude: 34.6498, longitude: -98.4022 },
    { icao: "KFTW", name: "FORT WORTH MEACHAM INTL", latitude: 32.8198, longitude: -97.3624 },
    { icao: "KFWS", name: "FORT WORTH SPINKS", latitude: 32.5651, longitude: -97.3084 },
    { icao: "KGDJ", name: "GRANBURY RGNL", latitude: 32.4431, longitude: -97.8214 },
    { icao: "KGGG", name: "EAST TEXAS RGNL", latitude: 32.384, longitude: -94.7115 },
    { icao: "KGKY", name: "ARLINGTON MUNI", latitude: 32.6639, longitude: -97.0943 },
    { icao: "KGLE", name: "GAINESVILLE MUNI", latitude: 33.6522, longitude: -97.1973 },
    { icao: "KGNC", name: "GAINES COUNTY", latitude: 32.6753, longitude: -102.653 },
    { icao: "KGOK", name: "GUTHRIE/EDMOND RGNL", latitude: 35.8515, longitude: -97.4162 },
    { icao: "KGOP", name: "GATESVILLE MUNI", latitude: 31.4209, longitude: -97.7965 },
    { icao: "KGPM", name: "GRAND PRAIRIE MUNI", latitude: 32.6988, longitude: -97.0469 },
    { icao: "KGRK", name: "ROBERT GRAY AAF", latitude: 31.0672, longitude: -97.8289 },
    { icao: "KGVT", name: "MAJORS", latitude: 33.0678, longitude: -96.0653 },
    { icao: "KGYI", name: "NORTH TEXAS RGNL/PERRIN FLD", latitude: 33.7142, longitude: -96.6744 },
    { icao: "KGZL", name: "STIGLER RGNL", latitude: 35.2882, longitude: -95.0939 },
    { icao: "KGZN", name: "GREGORY M SIMMONS MEML", latitude: 32.3658, longitude: -99.0237 },
    { icao: "KHBR", name: "HOBART RGNL", latitude: 34.9899, longitude: -99.0531 },
    { icao: "KHHW", name: "STAN STAMPER MUNI", latitude: 34.0336, longitude: -95.5421 },
    { icao: "KHLR", name: "HOOD AHP", latitude: 31.1387, longitude: -97.7145 },
    { icao: "KHOB", name: "LEA COUNTY RGNL", latitude: 32.6875, longitude: -103.217 },
    { icao: "KHQZ", name: "MESQUITE METRO", latitude: 32.747, longitude: -96.5304 },
    { icao: "KHSD", name: "SUNDANCE", latitude: 35.6018, longitude: -97.7062 },
    { icao: "KILE", name: "SKYLARK FLD", latitude: 31.0858, longitude: -97.6865 },
    { icao: "KINK", name: "WINKLER COUNTY", latitude: 31.7798, longitude: -103.202 },
    { icao: "KJDD", name: "WOOD COUNTY/COLLINS FLD", latitude: 32.7422, longitude: -95.4965 },
    { icao: "KJSO", name: "CHEROKEE COUNTY", latitude: 31.8693, longitude: -95.2174 },
    { icao: "KJWY", name: "MID-WAY RGNL", latitude: 32.4583, longitude: -96.9125 },
    { icao: "KJXI", name: "FOX STEPHENS FLD / GILMER MUNI", latitude: 32.698, longitude: -94.9489 },
    { icao: "KLAW", name: "LAWTON-FORT SILL RGNL", latitude: 34.5677, longitude: -98.4166 },
    { icao: "KLBB", name: "LUBBOCK PRESTON SMITH INTL", latitude: 33.6637, longitude: -101.821 },
    { icao: "KLLN", name: "LEVELLAND MUNI", latitude: 33.5525, longitude: -102.373 },
    { icao: "KLNC", name: "LANCASTER RGNL", latitude: 32.5776, longitude: -96.7175 },
    { icao: "KLTS", name: "ALTUS AFB", latitude: 34.668, longitude: -99.2678 },
    { icao: "KLUD", name: "DECATUR MUNI", latitude: 33.2542, longitude: -97.5805 },
    { icao: "KLUV", name: "LAMESA MUNI", latitude: 32.7563, longitude: -101.92 },
    { icao: "KLXY", name: "MEXIA-LIMESTONE COUNTY", latitude: 31.6412, longitude: -96.5145 },
    { icao: "KLZZ", name: "LAMPASAS", latitude: 31.1062, longitude: -98.1959 },
    { icao: "KMAF", name: "MIDLAND INTL AIR AND SPACE PORT", latitude: 31.9425, longitude: -102.202 },
    { icao: "KMDD", name: "MIDLAND AIRPARK", latitude: 32.0366, longitude: -102.102 },
    { icao: "KMKN", name: "COMANCHE COUNTY-CITY", latitude: 31.9203, longitude: -98.5992 },
    { icao: "KMKO", name: "MUSKOGEE-DAVIS RGNL", latitude: 35.6577, longitude: -95.3616 },
    { icao: "KMLC", name: "MC ALESTER RGNL", latitude: 34.8824, longitude: -95.7835 },
    { icao: "KMLU", name: "MONROE RGNL", latitude: 32.5106, longitude: -92.0361 },
    { icao: "KMNE", name: "MINDEN", latitude: 32.646, longitude: -93.2981 },
    { icao: "KMNZ", name: "HAMILTON MUNI", latitude: 31.6659, longitude: -98.1486 },
    { icao: "KMWL", name: "MINERAL WELLS RGNL", latitude: 32.7816, longitude: -98.0602 },
    { icao: "KNFW", name: "FORT WORTH NAS JRB (CARSWELL FLD)", latitude: 32.7692, longitude: -97.4415 },
    { icao: "KODO", name: "ODESSA-SCHLEMEYER FLD", latitude: 31.9214, longitude: -102.387 },
    { icao: "KOJA", name: "WEATHERFORD STAFFORD", latitude: 35.5458, longitude: -98.6685 },
    { icao: "KOKC", name: "WILL ROGERS WORLD", latitude: 35.3931, longitude: -97.6008 },
    { icao: "KOSA", name: "MOUNT PLEASANT RGNL", latitude: 33.0969, longitude: -94.9617 },
    { icao: "KOUN", name: "UNIVERSITY OF OKLAHOMA WESTHEIMER", latitude: 35.2456, longitude: -97.4721 },
    { icao: "KPRX", name: "COX FLD", latitude: 33.6366, longitude: -95.4508 },
    { icao: "KPSN", name: "PALESTINE MUNI", latitude: 31.7797, longitude: -95.7063 },
    { icao: "KPVJ", name: "PAULS VALLEY MUNI", latitude: 34.7096, longitude: -97.2233 },
    { icao: "KPVW", name: "HALE COUNTY", latitude: 34.1681, longitude: -101.717 },
    { icao: "KPWA", name: "WILEY POST", latitude: 35.5342, longitude: -97.6471 },
    { icao: "KPWG", name: "MC GREGOR EXEC", latitude: 31.4849, longitude: -97.3165 },
    { icao: "KRBD", name: "DALLAS EXEC", latitude: 32.6813, longitude: -96.8688 },
    { icao: "KRCE", name: "CLARENCE E PAGE MUNI", latitude: 35.4881, longitude: -97.8236 },
    { icao: "KRPH", name: "GRAHAM MUNI", latitude: 33.1107, longitude: -98.5548 },
    { icao: "KRQO", name: "EL RENO RGNL", latitude: 35.4727, longitude: -98.0058 },
    { icao: "KRSN", name: "RUSTON RGNL", latitude: 32.5132, longitude: -92.5884 },
    { icao: "KSEP", name: "STEPHENVILLE CLARK RGNL", latitude: 32.2153, longitude: -98.1777 },
    { icao: "KSHV", name: "SHREVEPORT RGNL", latitude: 32.4465, longitude: -93.826 },
    { icao: "KSJT", name: "SAN ANGELO RGNL/MATHIS FLD", latitude: 31.3577, longitude: -100.496 },
    { icao: "KSLR", name: "SULPHUR SPRINGS MUNI", latitude: 33.1598, longitude: -95.6211 },
    { icao: "KSNK", name: "WINSTON FLD", latitude: 32.6934, longitude: -100.95 },
    { icao: "KSNL", name: "SHAWNEE RGNL", latitude: 35.3573, longitude: -96.9428 },
    { icao: "KSPS", name: "SHEPPARD AFB/WICHITA FALLS MUNI", latitude: 33.9888, longitude: -98.4919 },
    { icao: "KSWW", name: "AVENGER FLD", latitude: 32.4674, longitude: -100.467 },
    { icao: "KTIK", name: "TINKER AFB", latitude: 35.4147, longitude: -97.3866 },
    { icao: "KTKI", name: "MCKINNEY NTL", latitude: 33.1771, longitude: -96.5888 },
    { icao: "KTPL", name: "DRAUGHON-MILLER CENTRAL TEXAS RGNL", latitude: 31.1519, longitude: -97.4077 },
    { icao: "KTRL", name: "TERRELL MUNI", latitude: 32.7085, longitude: -96.2671 },
    { icao: "KTXK", name: "TEXARKANA RGNL-WEBB FLD", latitude: 33.4537, longitude: -93.991 },
    { icao: "KTYR", name: "TYLER POUNDS RGNL", latitude: 32.3535, longitude: -95.403 },
    { icao: "KXBP", name: "BRIDGEPORT MUNI", latitude: 33.174, longitude: -97.8284 },
  ],
  // This merges with the `links` in src/facility.ts using title as the key
  links: [
    {
      title: "Profile",
      auth: true,
      sublinks: [
        {
          title: "ZFW Academy",
          href: "https://sites.google.com/view/zfwacademy",
        },
      ],
    },
  ],
  staticResources: [],
};

export default fac;
