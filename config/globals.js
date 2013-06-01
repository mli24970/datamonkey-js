function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

//We need to split each of the following into classes

//Spool Directory
define("spooldir","/var/lib/datamonkey/www/spool/");
define("host","datamonkey-dev");

//Data Type
define("Codon",0);
define("Nucleotide (DNA/RNA)",1);
define("Protein",2);

//Genetic Code
define("Universal code",0);
define("Vertebrate mitochondrial DNA code",1);
define("Yeast mitochondrial DNA code",2);
define("Mold, Protozoan and Coelenterate mt; Mycloplasma/Spiroplasma",3);
define("Invertebrate mitochondrial DNA code",4);
define("Ciliate, Dasycladacean and Hexamita Nuclear code",5);
define("Echinoderm mitochondrial DNA code",6);
define("Euplotid Nuclear code",7);
define("Alternative Yeast Nuclear code",8);
define("Ascidian mitochondrial DNA code",9);
define("Flatworm mitochondrial DNA code",10);
define("Blepharisma Nuclear code",11);


//Methods
//define("slac",0);
//define("fel",1);
//define("ifel",2);
//define("rel",3);
//define("parris",4);
//define("gabranch",5);
//define("bsr",9);
//define("meme",12);
//define("fubar",13);
//define("evf",42);
//define("ga",55);
//define("toggleanalysis",69);
//define("bgm",6);
//define("sbp",20);
//define("gard",21);
//define("asr",22);

//Trees
define("Neighbor Joining Tree",0);
define("User Tree(s)",1);

//Model Form
define("AC",0);
define("1",1);
define("AT",2);
define("CG",3);
define("CT",4);
define("GT",5);

//Named Models
define("F81",111111);
define("HKY85",010010);
define("TrN93",010040);
define("REV",012345);

//R-Options
define("Neutral",0);
define("User Supplied",1);
define("Estimated",4);
define("Estimated with CI",3);

//ambChoice
define("Averaged",0);
define("Resolved",1);


//Site-to-site rate variation
define("None",0);
define("General Discrete",1);
define("Beta-Gamma",2);

//Status Specific
define("pollingdelay",1000);
define("queue","queueing");
define("running","running");
define("finished","finished");
define("cancelled","cancelled");

types = {
meme: "meme"
}

var meme = {
  id            : 12,
  root          : "SRC1",
  namedmodels   : "",
  roptions      : 4,
  dnds          : 1.0,
  ambchoice     : 0,
  rateoption    : 0,
  rateclasses   : 2,
  rateoption2   : 1,
  rateclasses2  : 2
};

var fubar = {
  id                    : 13,
  root                  : "SRC1",
  namedmodels           : "",
  modelstring           : "010010",
  roptions              : 4,
  dnds                  : 1.0,
  prime_property_choice : 0,
  ambchoice             : 0,
  rateoption            : 0,
  rateclasses           : 2,
  rateoption2           : 1,
  rateclasses2          : 2
};

var asr = {
  id                    : 22,
  treemode              : 0,
  root                  : "SRC1",
  modelstring           : "010010",
  namedmodels           : "",
  roptions              : 4,
  dnds                  : 1.0,
  ambchoice             : 0,
  prime_property_choice : 0,
  pvalue                : 0.1,
  rateoption            : 1,
  rateclasses           : 2,
  rateoption2           : 1,
  rateclasses2          : 2
};

var gabranch = {
  id                    : 5,
  treemode              : 0,
  root                  : "SRC1",
  modelstring           : "010010",
  namedmodels           : "",
  roptions              : 4,
  dnds                  : 1.0,
  ambchoice             : 0,
  prime_property_choice : 0,
  pvalue                : 0.1,
  rateoption            : 0,
  rateclasses           : 2,
  rateoption2           : 1,
  rateclasses2          : 2,
};

var modelselection = {
  id : 10,
};

var gard = {
  id                    : 21,
  treemode              : 0,
  root                  : "SRC1",
  modelstring           : "010010",
  namedmodels           : "",
  roptions              : 4,
  dnds                  : 1.0,
  ambchoice             : 0,
  prime_property_choice : 0,
  pvalue                : 0.1,
  rateoption            : 1,
  rateclasses           : 2,
  rateoption2           : 1,
  rateClasses2          : 2
};

var evf = {
  id                    : 42,
  treemode              : 0,
  root                  : "SRC1",
  modelstring           : "010010",
  namedmodels           : "",
  roptions              : 4,
  dnds                  : 1.0,
  ambchoice             : 0,
  prime_property_choice : 0,
  pvalue                : 0.1,
  rateoption            : 0,
  rateclasses           : 2,
  rateoption2           : 1,
  rateclasses2          : 2
};

var sbp = {
  id                    : 20,
  treemode              : 0,
  root                  : "SRC1",
  modelstring           : "010010",
  namedmodels           : "",
  roptions              : 4,
  dnds                  : 1.0,
  ambchoice             : 0,
  prime_property_choice : 0,
  pvalue                : 0.1,
  rateoption            : 1,
  rateclasses           : 2,
  rateoption2           : 1,
  rateClasses2          : 2
};

define("types",types)
define("asr",asr)
define("meme",meme)
define("fubar",fubar)
define("modelselection",modelselection)
define("gard",gard)
define("evf",evf)
define("sbp",sbp)
