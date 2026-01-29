const text = [
    ">> USER PROFILE LOADED",
    "",
    "Ism: Ehson Oripov",
    "Nickname: SPECTER",
    "",
    "Ta'lim:",
    "- Yo'nalish: Axborot xavfsizligi",
    "- Daraja: Talaba",
    "- Kurs: 2-kurs",
    "",
    "O'qish joyi:",
    "- Oliy ta'lim muassasasi: (Toshkent Gumanitar Fanlar Universiteti)",
    "- Fakultet: Axborot texnologiyalari / Xavfsizlik",
    "",
    "Qiziqishlar:",
    "- Ethical hacking",
    "- Kali Linux",
    "- Linux tizimlari",
    "- Tarmoq va tizim xavfsizligi",
    "",
    "Maqsad:",
    "Professional ethical hacker bo'lish",
    "va real tizimlarni himoyalash",
    "",
    "Status: LEARNING | PRACTICING | EVOLVING"
];

let line = 0;
let char = 0;
const speed = 35;
const terminal = document.getElementById("terminal-text");

function typeEffect() {
    if (line < text.length) {
        if (char < text[line].length) {
            terminal.innerHTML += text[line].charAt(char);
            char++;
            setTimeout(typeEffect, speed);
        } else {
            terminal.innerHTML += "\n";
            char = 0;
            line++;
            setTimeout(typeEffect, 300);
        }
    }
}

typeEffect();
