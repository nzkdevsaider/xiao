const commando = require('discord.js-commando');

class VocaloidSongRndm extends commando.Command {
    constructor(Client){
        super(Client, {
            name: 'vocaloid', 
            group: 'response',
            memberName: 'vocaloid',
            description: 'Sends a random VOCALOID song. (;vocaloid)',
            examples: [';vocaloid']
        });
    }

    async run(message, args) {
        if(message.channel.type !== 'dm') {
            if(!message.channel.permissionsFor(this.client.user).hasPermission('SEND_MESSAGES')) return;
            if(!message.channel.permissionsFor(this.client.user).hasPermission('READ_MESSAGES')) return;
        }
        console.log("[Command] " + message.content);
        let coin = ["https://www.youtube.com/watch?v=ebAKoRcYFTA", "https://www.youtube.com/watch?v=Mqps4anhz0Q", "https://www.youtube.com/watch?v=AUEiHQOCQ2M", "https://www.youtube.com/watch?v=oyteTOBxRm8", "https://www.youtube.com/watch?v=uwwU55zBYlQ", "https://www.youtube.com/watch?v=sSYoz0JmnZo", "https://www.youtube.com/watch?v=NpU4dsXW6EI", "https://www.youtube.com/watch?v=MzyXD8bNbvk", "https://www.youtube.com/watch?v=hyV4qGAPKac", "https://www.youtube.com/watch?v=pywNi6gD1FA", "https://www.youtube.com/watch?v=17FEtaiWdVg", "https://www.youtube.com/watch?v=fmrA-gxJxgQ", "https://www.youtube.com/watch?v=yOBWgSPrYVA", "https://www.youtube.com/watch?v=nCaqf9WhqOY", "https://www.youtube.com/watch?v=cQKGUgOfD8U", "https://www.youtube.com/watch?v=sK92X82T3Sk", "https://www.youtube.com/watch?v=AH5_sKwDw1E", "https://www.youtube.com/watch?v=dw-KJNqcK-Q", "https://www.youtube.com/watch?v=X47JmmqbMvc", "https://www.youtube.com/watch?v=ojQPpYVQt7U", "https://www.amazon.com/Gogatsu-Yamai-feat-Kagamine-Len/dp/B00P1BG27S", "https://www.youtube.com/watch?v=N1-Z8uslIsI", "https://www.youtube.com/watch?v=EAgk-t2zzqw", "https://www.youtube.com/watch?v=uLBC2kWYFo8", "https://www.youtube.com/watch?v=OXHYIlkZLUU", "https://www.youtube.com/watch?v=ObIa9wXbyMQ", "https://www.youtube.com/watch?v=dGNoCICGmo0", "https://www.youtube.com/watch?v=LcoyEZkTKfY", "https://www.youtube.com/watch?v=mKHaW0qd5Mw", "https://www.youtube.com/watch?v=GG627DYk_E4", "https://www.youtube.com/watch?v=jTm6Q5Pj_Jo", "https://www.youtube.com/watch?v=TVeIDmk3rBo", "https://www.youtube.com/watch?v=1K3in6w9tt4", "https://www.youtube.com/watch?v=07r67gGbtLQ", "https://www.youtube.com/watch?v=243vPl8HdVk", "https://www.youtube.com/watch?v=zweVJrnE1uY", "https://www.youtube.com/watch?v=RKtoreimcQ8", "https://www.youtube.com/watch?v=Je6dCVfHvkU", "https://www.youtube.com/watch?v=UxFv12y_evM", "https://www.youtube.com/watch?v=2HegQtmJeto", "https://www.youtube.com/watch?v=8-Epnpruww0"];
        coin = coin[Math.floor(Math.random() * coin.length)];
        message.channel.send(coin);
    }
}

module.exports = VocaloidSongRndm;