var commandText = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function (text) {
  return "[[u;inherit;]" + text + "]";
}


var App = {
  intro: function (ret) {
    if (typeof ret === 'undefined') ret = false;
    var greetText =
      "###################################################################################################################################\n" +
      "#[[b;#00DE12;]\t\t     ______  _______         _____    _____   ______    ____   ____  _____      _____  ____   ____  ____    ____  ]   \t#\n" +
      "#[[b;#00DE12;]\t\t    |      \\/       \\    ___|\\    \\  |\\    \\ |\\     \\  |    | |    ||\\    \\    /    /||    | |    ||    |  |    | ]  \t #\n" +
      "#[[b;#00DE12;]\t\t   /          /\\     \\  /    /\\    \\  \\\\    \\| \\     \\ |    | |    || \\    \\  /    / ||    | |    ||    |  |    | ] \t  #\n" +
      "#[[b;#00DE12;]\t\t  /     /\\   / /\\     ||    |  |    |  \\|    \\  \\     ||    |_|    ||  \\____\\/    /  /|    | |    ||    | /    // ]\t   #\n" +
      "#[[b;#00DE12;]\t\t /     /\\ \\_/ / /    /||    |__|    |   |     \\  |    ||    .-.    | \\ |    /    /  / |    | |    ||    |/ _ _//  ] \t  #\n" +
      "#[[b;#00DE12;]\t\t|     |  \\|_|/ /    / ||    .--.    |   |      \\ |    ||    | |    |  \\|___/    /  /  |    | |    ||    |\\    \\'  ]\t   #\n" +
      "#[[b;#00DE12;]\t\t|\\____\\       |____|  /|____|  |____|   |____||\\_____/||____| |____|     /____/  /    |\\___\\_|____||____|  \\____\\ ]\t   #\n" +
      "#[[b;#00DE12;]\t\t| |    |      |    | / |    |  |    |   |    |/ \\|   |||    | |    |    |`    | /     | |    |    ||    |   |    | ]\t  #\n" +
      "#[[b;#00DE12;]\t\t \\|____|      |____|/  |____|  |____|   |____|   |___|/|____| |____|    |_____|/       \\|____|____||____|   |____|]       #\n" +
      "#\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t                                                             #\n" +
      "#\t\tHi, I'm " + commandText('ManHYuk') + " - Backend Web Developer in Korea.\t\t\t\t\t\t\t\t\t\t\t\t                        #\n" +
      "#\t\tPlease type " + commandText('ls') + " or " + commandText('help') + " for a list of commands.  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t #\n" +
      "#\t\t(Sorry, This is not complete Page. Please, Show Outline) \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#\n" +
      "#\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     #\n" +
      "###################################################################################################################################\n";
    if (!ret) {
      this.echo("\n" + greetText);
    } else {
      return greetText;
    }
  },
  ls: function () {
    this.exec('menu');
  },
  rm: function (command) {
    this.echo("|  Oh no!! don't delete that!");
  },
  cd: function (command) {
    if (command) {
      this.exec(command);
    } else {
      this.echo("|  directory is not selected.");
    }
  },
  find: function (command) {
    if (command) {
      this.exec(command);
    } else {
      this.echo("|  Please enter what you are looking for.");
    }
  },
  grep: function (command) {
    if (command) {
      this.exec(command);
    } else {
      this.echo("|  Please enter what you are looking for.");
    }
  },
  help: function () {
    this.exec('menu');
  },
  menu: function () {
    // this.echo();
    // this.echo("|  " + commandText("intro") + "               - Display Message of the Day");
    this.echo("|  " + commandText("about") + "              - Summary of me");
    this.echo("|  " + commandText("activity") + "           - My Experience");
    this.echo("|  " + commandText("projects") + "           - Recent projects of mine");
    this.echo("|  " + commandText("skills") + "             - What I can do");
    this.echo("|  " + commandText("awards") + "             - Awards and features for my work");
    this.echo("|");
    this.echo("|  " + commandText("social") + "             - My Social Status");
    this.echo("|  " + commandText("contact") + "            - Contact me");
    this.echo("|");
    //this.echo("|  " + commandText("download") + "           - DOWNLOAD MY RESUME! (pdf) ");
    this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
  },
  social: function () {
    this.echo("|   ");
    //this.echo("|  " + commandText("Portfolio") + ":         http://manhyuk.xyz");
    this.echo("|  " + commandText("GitHub") + ":       https://github.com/ManHyuk");
    this.echo("|  " + commandText("Blog") + ":         https://manhyuk.github.io");
    this.echo("|   ");
  },
  github: function () {
    this.echo("|  https://github.com/ManHyuk");
  },
  exp: function () {
    this.exec('work');
  },
  works: function () {
    this.exec('work');
  },
  work: function () {
    this.echo("|   " + commandText('WORK is not yet...'));
  },
  whoami: function () {
    this.exec('about');
  },
  about: function () {
    this.echo("|  Name:         " + commandText('ManHyuk Han'));
    this.echo("|");
    this.echo("|  Summary:      I am a Backend Web Developer (primarily " + commandText('Node.js')+ ")");
    this.echo("|                && I am a student at " + commandText('KwangWoon University') + " majoring in " + commandText('Computer Software') + ".");
    this.echo("|");
  },


  activity: function () {
    this.exec('activities');
  },
  activities: function () {
    this.echo("|  [[g;#B2D100;]Education]");
    this.echo("|  ");
    this.echo("|  " + commandText('# KwangWoonUniv') + ' majoring in ' + commandText('Computer Software'));
    this.echo('|  ');
    this.echo("|  [[g;#B2D100;]Activity]");
    this.echo('|  ');
    this.echo('|  ' + commandText('# Smilegate-Server Dev Camp') + "  2018.01 ~ 2018.02 " + commandText('3rd'));
    this.echo('|  ');
    this.echo('|  ' + commandText('# AWS-Supporters') + "  2017.07 ~ 2018.08 " + commandText('1st'));
    this.echo('|  ');
    this.echo('|  ' + commandText('# LikeLion') + "  2017.03 ~ 2018.02 " + commandText('5th'));
    this.echo('|  ' + commandText(' //') + ' Global union club for university student');
    this.echo('|  ');
    this.echo('|  ' + commandText('# P.rogramming') + "  2017.07 ~ 2017.09 " + commandText('7th'));
    this.echo('|  ' + commandText(' //') + ' IT venture union club for university student');
    this.echo('|  ');
    this.echo('|  ' + commandText('# S.O.P.T.') + "  2017.09 ~ 2018.01 " + commandText('21th Android Part'));
    this.echo('|  ' + commandText('# S.O.P.T.') + "  2017.03 ~ 2017.07 " + commandText('20th iOS Part'));
    this.echo('|  ' + commandText('# S.O.P.T.') + "  2016.03 ~ 2016.07 " + commandText('18th Server Part'));
    this.echo('|  ' + commandText(' //') + ' IT venture union club for university student');
    this.echo('|  ');
  },

  project: function () {
    this.exec('projects');
  },
  projects: function () {
    this.echo('|  ' + commandText('MONSTUDY') + "      http://goo.gl/lW7TJK");
    this.echo('|  ' + commandText('  //') + ' Searching Study Room');
    this.echo('|  ');
    this.echo('|  ' + commandText('SeoulMarket') + "   https://goo.gl/SQ1Lo2");
    this.echo('|  ' + commandText('  //') + ' Searching Free market');
    this.echo('|  ');
    this.echo("|  " + commandText('VocaVocaNi') + "    http://vocavocani.xyz \(uncompleted porject\)");
    this.echo('|  ' + commandText('  //') + ' Group Study for self-studing people');
    this.echo('|  ');
    this.echo('|  ' + commandText('Ya, Ta!') + "       https://github.com/Ya-Ta");
    this.echo('|  ' + commandText('  //') + ' Carpool macthing and Sharing services');
    this.echo('|  ');
    this.echo('|  ' + commandText('Your Arts') + "     https://github.com/orgs/YourArts");
    this.echo('|  ' + commandText('  //') + ' Searching and inform for Exhibitions');
    this.echo('|  ');
    this.echo('|  ' + commandText('Q: Am') + "         https://github.com/orgs/Q-Am");
    this.echo('|  ' + commandText('  //') + ' Random diary services');
    this.echo('|  ');
    this.echo('|  ' + commandText('ZzicMe!') + "       https://github.com/orgs/unithon-snap");
    this.echo('|  ' + commandText('  //') + ' Amateur photographer matching services');
    this.echo('|  ');


  },
  skill: function () {
    this.exec('skills');
  },
  skills: function () {
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Back-End] ");
    this.echo("|  " + commandText('Node.js w/ Express') + "     ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@@@@@@@@@]                       ##");
    this.echo("|  " + commandText('Python w/ Django') + "       ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    this.echo("|  " + commandText('Ruby w/ Rails') + "          ##[[g;#B2D100;]@@@@@@@@@@@@]                                       ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Front-End] ");
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    this.echo("|  " + commandText('CSS') + "                    ##[[g;#B2D100;]@@]                                                 ##");
    this.echo("|  " + commandText('HTML5') + "                  ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('MariaDB (MySQL)') + "        ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    //this.echo("|  " + commandText('MongoDB') + "                ##[[g;#D1B900;]@@]                                                 ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Native Mobile / Game Dev] ");
    this.echo("|  " + commandText('Unity (C#)') + "             ##[[g;#D1B900;]@]                                                  ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]ETC] ");
    // this.echo("|");
    this.echo("|  " + commandText('Ubuntu Linux') + "           ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    this.echo("|  " + commandText('AWS-EC2') + "                ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    this.echo("|  " + commandText('AWS-RDS') + "                ##[[g;#5BD100;]@@@@@@@@@@@@@@@@@@@@]                               ##");
    this.echo("|  " + commandText('AWS-S3') + "                 ##[[g;#5BD100;]@@@@@@@@@@@@@@@@]                                   ##");
    this.echo('|  ');
  },
  contact: function () {
    this.echo('|  ');
    this.echo("|  " + commandText("Email") + ":        10000hyuk@naver.com");
    this.echo('|  ');
  },
  credit: function () {
    this.exec('credits');
  },
  credits: function () {
    this.echo('|  ');
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo('|  ');
  },

  // AWARD

  award: function(){
    this.exec('awards');
  },
  awards: function(){
    this.echo("|  " );
    this.echo("|  " + commandText('SeoulMarket') + "                                    Dec  2016  \n|   | Grand Prize by Seoul Mobile Platform        project: https://github.com/MobileSeoul/2016seoul-01");

  },

  download: function () {
    this.echo('|  ');
    this.echo('|  ' + commandText('Not yet...'));
    this.echo('|  ');
    // download path
    //window.location.href = "./mm.pdf";
  },

  // BLOG

  // blog: function(){
  //   window.location.href = "http://manhyuk.xyz";
  // },

  // RESUME

  // resume: function(){
  //   this.echo();
  //   this.echo("|  " + commandText("DOWNLOAD MY RESUME!") + "       http://naver.com");
  //   this.echo();
  //
  // },

  cls: function () {
    this.clear();
  },
  clear: function () {
    this.clear();
  },
  echo: function (command) {
    this.echo(command);
  },
  all: function () {
    this.clear();
    this.exec('intro');
    this.exec('about');
    this.exec('activities');
    this.exec('projects');
    this.exec('skills');
    this.exec('social');
    this.exec('contact');
    //this.exec('resume');
  },
  sudo: function () {
    this.exec('login');
  },
  login: function () {
    this.echo('|  ');
    this.echo("|  login function currently under development");
    this.echo('|  ');
  },
  du: function () {
    this.echo("|  100%");
  },
  mv: function () {
    this.echo('|  ');
    this.echo("|  dont't move!");
    this.echo('|  ');
  },
  cp: function () {
    this.echo('|  ');
    this.echo("|  dont't copy!");
    this.echo('|  ');
  },
  mkdir: function () {
    this.echo('|  ');
    this.echo("|  mkdir function currently under development");
    this.echo('|  ');
  },

};

jQuery(document).ready(function ($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').terminal(App, {
      greetings: function (cb) {
        that = this;
        // cb(App.intro(true));
        cb(App.mobile());
      },

      onBlur: function () {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });
  } else {
    $('body').terminal(App, {
      greetings: function (cb) {
        cb(App.intro(true));
      },

      onBlur: function () {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });
  }
});
//aa
