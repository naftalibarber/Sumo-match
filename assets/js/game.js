// ============================================================
// זירת סומו - משחק קרב מלא | Sumo Battle Arena - Full Game
// תמיכה בעברית ואנגלית | Hebrew & English support
// ============================================================

// ============================================================
// מערכת שפות מלאה | Full Language System
// ============================================================
let currentLang = 'he';

const LANG = {
  he: {
    title: '🥊 קרב סומו 🥊',
    selectMode: 'בחר מצב משחק',
    menuHint: 'לחץ על כרטיס או השתמש בחצים + Enter לבחירה',
    modes: [
      { label: 'הישרדות',     icon: '⚔️', desc: 'קרב 1 מול 1-7 בוטים - האחרון שנשאר מנצח' },
      { label: 'טורניר',      icon: '🏆', desc: 'מבנה 8 שחקנים - רבע גמר, חצי גמר, גמר' },
      { label: 'אתגר זמן',    icon: '⏱️', desc: 'שרוד דקה שלמה מול בוטים אינסופיים' },
      { label: 'מלך הגבעה',   icon: '👑', desc: 'עמוד במרכז - הראשון ל-500 נקודות מנצח' },
      { label: 'פצצה מתקתקת', icon: '💣', desc: 'העבר את הפצצה לפני שהיא מתפוצצת!' }
    ],
    bots: '🤖 בוטים: ',
    alive: '⚡ חיים: ',
    controls: 'WASD / חצים = תנועה  |  רווח = תפריט  |  אנטר = מחדש',
    gameStart: 'המשחק מתחיל! 🥊',
    leftArena: ' יצא מהזירה! 🚫',
    blastMsg: '💥 גל הדף!',
    freezeMsg: '❄️ כולם קפואים ל-4 שניות!',
    explodedMsg: ' התפוצץ! 💥',
    survivalWin: '🏆 ניצחת! אתה האחרון!',
    timeWin: '⏱️ שרדת! ניצחון!',
    gameOver: '💀 הפסדת!',
    youWin: '🏆 ניצחת!',
    retryHint: 'אנטר = נסה שוב  |  רווח = תפריט',
    replayHint: 'אנטר = שחק שוב  |  רווח = תפריט',
    anyKey: 'לחץ כל מקש להמשך...',
    roundOver: '✅ סיום ',
    roundNames: ['רבע גמר', 'חצי גמר', 'גמר'],
    advancedTo: 'מנצחים שעברו לסיבוב הבא:',
    vsMsg: ' נגד ',
    fightMsg: 'קרב: ',
    roundLabel: 'סיבוב',
    playerName: 'שחקן 1',
    botNames: ['שחקן 2','שחקן 3','שחקן 4','שחקן 5','שחקן 6','שחקן 7','שחקן 8','שחקן 9'],
    scoreOf: '👑 ',
    langBtnLabel: '🌐 EN',
    spectateHint: 'אנטר = שחק שוב  |  רווח = תפריט',
    chooseTime: 'כמה זמן לשחק?',
    seconds: 'שניות',
    chooseBots: 'כמה יריבים?',
    botsHint: 'לחץ אנטר לאישור',
    opponent: 'יריב',
    opponents: 'יריבים',
    powerupsTitle: '⚡ כוחות מיוחדים',
    powerupDescs: {
      speed:    { icon:'⚡', name:'מהירות',    desc:'מהירות תנועה כפולה למשך 5 שניות' },
      strength: { icon:'💪', name:'כוח',       desc:'דחיפה חזקה פי 3 למשך 5 שניות' },
      shield:   { icon:'🛡', name:'מגן',       desc:'חסין מדחיפות, אך נע לאט יותר' },
      blast:    { icon:'💥', name:'גל הדף',    desc:'דוחף את כל היריבים רחוק מיידית' },
      freeze:   { icon:'❄', name:'קרח',        desc:'מקפיא את כל שאר השחקנים ל-4 שניות' },
      repulsor: { icon:'🔮', name:'דחייה',     desc:'הילה שדוחפת יריבים קרובים כל הזמן' }
    }
  },
  en: {
    title: '🥊 Sumo Battle 🥊',
    selectMode: 'Select Game Mode',
    menuHint: 'Click a card or use Arrow Keys + Enter to select',
    modes: [
      { label: 'Survival',     icon: '⚔️', desc: '1 vs 1-7 bots — last one standing wins' },
      { label: 'Tournament',   icon: '🏆', desc: '8-player bracket — quarters, semis, final' },
      { label: 'Time Attack',  icon: '⏱️', desc: 'Survive a full minute against endless bots' },
      { label: 'King of Hill', icon: '👑', desc: 'Hold the center — first to 500 pts wins' },
      { label: 'Hot Potato',   icon: '💣', desc: 'Pass the bomb before it explodes!' }
    ],
    bots: '🤖 Bots: ',
    alive: '⚡ Alive: ',
    controls: 'WASD / Arrows = Move  |  Space = Menu  |  Enter = Restart',
    gameStart: 'Fight! 🥊',
    leftArena: ' left the arena! 🚫',
    blastMsg: '💥 Blast Wave!',
    freezeMsg: '❄️ Everyone frozen for 4 seconds!',
    explodedMsg: ' exploded! 💥',
    survivalWin: '🏆 You Win! Last one standing!',
    timeWin: '⏱️ You survived! Victory!',
    gameOver: '💀 Game Over!',
    youWin: '🏆 You Win!',
    retryHint: 'Enter = Retry  |  Space = Menu',
    replayHint: 'Enter = Play Again  |  Space = Menu',
    anyKey: 'Press any key to continue...',
    roundOver: '✅ Round Over: ',
    roundNames: ['Quarter-Final', 'Semi-Final', 'Final'],
    advancedTo: 'Winners advancing to next round:',
    vsMsg: ' vs ',
    fightMsg: 'Fight: ',
    roundLabel: 'Round',
    playerName: 'Player 1',
    botNames: ['Player 2','Player 3','Player 4','Player 5','Player 6','Player 7','Player 8','Player 9'],
    scoreOf: '👑 ',
    langBtnLabel: '🌐 עב',
    spectateHint: 'Enter = Play Again  |  Space = Menu',
    chooseTime: 'How long to play?',
    seconds: 'sec',
    chooseBots: 'How many opponents?',
    botsHint: 'Press Enter to confirm',
    opponent: 'opponent',
    opponents: 'opponents',
    powerupsTitle: '⚡ Power-Ups',
    powerupDescs: {
      speed:    { icon:'⚡', name:'Speed',    desc:'Double movement speed for 5 seconds' },
      strength: { icon:'💪', name:'Strength', desc:'Triple push force for 5 seconds' },
      shield:   { icon:'🛡', name:'Shield',   desc:'Immune to pushes, but moves slower' },
      blast:    { icon:'💥', name:'Blast',    desc:'Instantly pushes all opponents away' },
      freeze:   { icon:'❄', name:'Freeze',   desc:'Freezes all other players for 4 seconds' },
      repulsor: { icon:'🔮', name:'Repulsor', desc:'Aura that continuously repels nearby enemies' }
    }
  }
};

// פונקציה לגישה לטקסטים בשפה הנוכחית
function T(key) { return LANG[currentLang][key]; }

// ============================================================
// קבועים
// ============================================================
const ARENA_R = 230, HILL_R = 60, PLAYER_R = 22;
const FRICTION = 0.84, BASE_SPEED = 0.28, PUSH_FORCE = 4.5;
const POWERUP_DURATION = 5000, FREEZE_DURATION = 4000, BOMB_TIME = 8000;
const HILL_WIN_SCORE = 500;

const STATE = { MENU:'menu', BOT_SELECT:'botselect', TIME_SELECT:'timeselect', SURVIVAL:'survival', TOURNAMENT:'tournament', TIMEATTACK:'timeattack', KING:'king', POTATO:'potato', GAMEOVER:'gameover', WIN:'win', TOURNEY_BRACKET:'bracket', SPECTATING:'spectating', PROFILE:'profile' };
const MODE_KEYS = [STATE.SURVIVAL, STATE.TOURNAMENT, STATE.TIMEATTACK, STATE.KING, STATE.POTATO];
const BOT_SELECT_MODES = [STATE.SURVIVAL, STATE.TIMEATTACK, STATE.KING, STATE.POTATO];

const COLORS = {
  sand:[210,185,140], arenaBorder:[200,160,80],
  player:[60,200,255],
  botColors:[[255,80,80],[255,160,50],[180,80,255],[80,255,150],[255,255,80],[255,80,200],[255,120,40],[200,255,80]],
  powerups:{ speed:[255,220,0], strength:[255,100,0], shield:[80,150,255], blast:[255,50,200], freeze:[100,220,255], repulsor:[180,80,255] }
};

// ============================================================
// וקטור 2D
// ============================================================
class Vec2 {
  constructor(x=0,y=0){this.x=x;this.y=y;}
  add(v){return new Vec2(this.x+v.x,this.y+v.y);}
  sub(v){return new Vec2(this.x-v.x,this.y-v.y);}
  mul(s){return new Vec2(this.x*s,this.y*s);}
  mag(){return Math.sqrt(this.x*this.x+this.y*this.y);}
  norm(){let m=this.mag();return m>0?new Vec2(this.x/m,this.y/m):new Vec2(0,0);}
  dot(v){return this.x*v.x+this.y*v.y;}
  copy(){return new Vec2(this.x,this.y);}
}

// ============================================================
// קופסת כוח-על
// ============================================================
class PowerUpBox {
  constructor(x,y,type){
    this.pos=new Vec2(x,y); this.type=type; this.size=18;
    this.pulse=Math.random()*Math.PI*2; this.alive=true;
  }
  draw(p){
    if(!this.alive)return;
    this.pulse+=0.07;
    let c=COLORS.powerups[this.type], glow=Math.sin(this.pulse)*0.3+0.7;
    p.noStroke(); p.fill(c[0],c[1],c[2],40*glow);
    p.ellipse(this.pos.x,this.pos.y,this.size*3,this.size*3);
    p.fill(c[0],c[1],c[2],200); p.stroke(255,255,255,180); p.strokeWeight(2);
    p.rect(this.pos.x-this.size/2,this.pos.y-this.size/2,this.size,this.size,5);
    p.noStroke(); p.fill(255,255,255,230);
    p.textAlign(p.CENTER,p.CENTER); p.textSize(11);
    p.text({speed:'⚡',strength:'💪',shield:'🛡',blast:'💥',freeze:'❄',repulsor:'🔮'}[this.type]||'?',this.pos.x,this.pos.y);
  }
}

// ============================================================
// לוחם
// ============================================================
class Fighter {
  constructor(x,y,isPlayer,colorIdx=0,name='?'){
    this.pos=new Vec2(x,y); this.vel=new Vec2(0,0); this.acc=new Vec2(0,0);
    this.r=PLAYER_R; this.isPlayer=isPlayer; this.colorIdx=colorIdx; this.name=name;
    this.alive=true; this.score=0;
    this.powerups={}; this.powerupTimers={};
    this.hasBomb=false; this.bombTimer=0;
    this.aiTarget=null; this.aiWander=new Vec2(Math.random()-0.5,Math.random()-0.5).norm();
    this.aiWanderTimer=60+Math.random()*60;
    this.frozen=false; this.frozenTimer=0;
    this.hitFlash=0; this.trailPos=[];
    // אישיות ייחודית לכל בוט — נקבעת פעם אחת
    this.aiPersonality = isPlayer ? null : {
      aggression:  0.4 + Math.random()*1.2,  // 0.4–1.6: כמה אגרסיבי
      edgeBias:    0.5 + Math.random()*1.5,  // 0.5–2.0: כמה מעדיף מטרות קרובות לקצה
      targetSticky: Math.random(),            // 0–1: כמה "נדבק" למטרה אחת
      powerupHunger: Math.random(),           // 0–1: כמה רוצה powerups
      playerAvoid:  Math.random()*0.5,        // 0–0.5: כמה נמנע מלתקוף שחקן
      currentTarget: null,                    // מטרה נוכחית (sticky)
      targetTimer: 0,                         // כמה frames נשאר עם מטרה
    };
  }
  getColor(){ if(this.isPlayer)return COLORS.player; let n=COLORS.botColors.length; return COLORS.botColors[((this.colorIdx%n)+n)%n]; }
  updatePowerups(dt){
    for(let k in this.powerupTimers){
      this.powerupTimers[k]-=dt;
      if(this.powerupTimers[k]<=0){delete this.powerupTimers[k];delete this.powerups[k];}
    }
  }
  applyPowerup(type){ this.powerups[type]=true; this.powerupTimers[type]=POWERUP_DURATION; }
  updateFreeze(dt){ if(this.frozen){this.frozenTimer-=dt;if(this.frozenTimer<=0)this.frozen=false;} }
  updateBomb(dt){
    if(this.alive&&this.hasBomb){this.bombTimer-=dt;if(this.bombTimer<=0){this.alive=false;return true;}}
    return false;
  }
  updateAI(fighters,center,hillMode,gameMode){
    if(!this.alive||this.frozen)return;

    const distTo=(f)=>this.pos.sub(f.pos).mag();
    const dirTo=(v)=>v.sub(this.pos).norm();
    const myDist=this.pos.sub(center).mag();
    const alive=fighters.filter(f=>f!==this&&f.alive);

    // ── 1. פאניקה: קרוב לקצה → ברח למרכז ──
    const edgeDanger = myDist > ARENA_R - 55;
    const edgeCritical = myDist > ARENA_R - 30;

    // ── 2. מצא את הכוח-על הקרוב ביותר (powerupBoxes גלובלי) ──
    let nearestBox=null, nearestBoxDist=Infinity;
    for(let box of powerupBoxes){
      if(!box.alive)continue;
      let d=this.pos.sub(box.pos).mag();
      if(d<nearestBoxDist){nearestBoxDist=d;nearestBox=box;}
    }

    // ── 3. בחר מטרה לתקיפה עם אישיות ייחודית ──
    let attackTarget=null;
    const pers=this.aiPersonality;
    if(pers){
      // sticky target: שמור על אותה מטרה כמה שניות
      pers.targetTimer--;
      if(pers.currentTarget && pers.targetTimer>0 && alive.some(f=>f===pers.currentTarget)){
        attackTarget=pers.currentTarget;
      } else {
        // בחר מטרה חדשה לפי אישיות
        let bestScore=-Infinity;
        for(let f of alive){
          let d=distTo(f);
          let fEdgeDist=ARENA_R - f.pos.sub(center).mag();
          let score=0;
          // קרוב לקצה — לפי edgeBias
          score += (200-fEdgeDist) * pers.edgeBias;
          // קרוב אלינו — לפי aggression
          score += (300-d) * pers.aggression * 0.5;
          // הימנע מלתקוף שחקן (playerAvoid)
          if(f.isPlayer) score -= pers.playerAvoid * 120;
          // potato: רדוף אחרי הפצצה
          if(gameMode==='potato' && f.hasBomb && !this.hasBomb) score += 300;
          if(gameMode==='potato' && this.hasBomb) score += 100;
          // רנדומיות קטנה — מונעת בחירה זהה
          score += (Math.random()-0.5)*40;
          if(score>bestScore){bestScore=score;attackTarget=f;}
        }
        // sticky: זמן נדבקות לפי targetSticky (30–120 frames)
        pers.currentTarget=attackTarget;
        pers.targetTimer=Math.floor(30 + pers.targetSticky*90);
      }
    } else {
      // fallback אם אין אישיות
      let best=Infinity;
      for(let f of alive){ let d=distTo(f); if(d<best){best=d;attackTarget=f;} }
    }

    // ── 4. בחר איזה מישהו לברוח ממנו (מי חזק/קרוב) ──
    let fleeFrom=null;
    for(let f of alive){
      let d=distTo(f);
      if(d<PLAYER_R*3.5){
        // בוט עם strength קרוב — ברח!
        if(f.powerups['strength'] && !this.powerups['shield']){fleeFrom=f;break;}
      }
    }

    // ── 5. BLAST: השתמש רק כשמרובד יריבים קרובים ──
    if(this.powerups['blast']){
      let closeEnemies=alive.filter(f=>distTo(f)<ARENA_R*0.55);
      if(closeEnemies.length>=1){
        for(let o of alive){
          if(o.powerups['shield'])continue;
          o.vel=o.vel.add(dirTo(o.pos).mul(8)); // push away
        }
        delete this.powerups['blast']; delete this.powerupTimers['blast'];
        this._blastTriggered={x:this.pos.x,y:this.pos.y};
      }
    }

    // ── 6. עדכן wander ──
    this.aiWanderTimer--;
    if(this.aiWanderTimer<=0){
      this.aiWander=new Vec2(Math.random()-0.5,Math.random()-0.5).norm();
      this.aiWanderTimer=50+Math.random()*80;
    }

    // ── 7. בנה וקטור תנועה ──
    let dir=new Vec2(0,0);

    // עדיפות 1 (קריטי): ברח מהקצה
    if(edgeCritical){
      dir=dir.add(dirTo(center).mul(4.0));
    } else if(edgeDanger){
      dir=dir.add(dirTo(center).mul(2.0));
    }

    // עדיפות 2: ברח מאויב חזק
    if(fleeFrom && !edgeDanger){
      let fleeDir=this.pos.sub(fleeFrom.pos).norm();
      dir=dir.add(fleeDir.mul(1.5));
    }

    // עדיפות 3: אסוף כוח-על קרוב (אם שווה)
    const wantPowerup = !edgeDanger && nearestBox && nearestBoxDist < 120
      && !this.powerups['speed'] && !this.powerups['strength']; // לא אם כבר יש
    if(wantPowerup){
      dir=dir.add(dirTo(nearestBox.pos).mul(1.0));
    }

    // עדיפות 4: תקיפה / King of Hill
    if(hillMode && !edgeDanger){
      let myHillDist = this.pos.sub(center).mag();
      let onHill = myHillDist < HILL_R;
      let nearHill = myHillDist < HILL_R * 1.6;

      // כוח-על בדרך לגבעה — אסוף אם קרוב וכדאי
      const hillWantPowerup = !onHill && nearestBox && nearestBoxDist < 90
        && !this.powerups['speed'] && !this.powerups['strength'];

      if(onHill){
        // על הגבעה — עוגן למרכז
        dir=dir.add(dirTo(center).mul(1.8));
        // דחוף פולש שנמצא על הגבעה
        let hillInvader=alive.filter(f=>f.pos.sub(center).mag()<HILL_R)
          .sort((a,b)=>distTo(a)-distTo(b))[0];
        if(hillInvader) dir=dir.add(dirTo(hillInvader.pos).mul(1.0));
        // אם יש כוח-על ממש קרוב (בתוך הגבעה כמעט) — אסוף
        if(nearestBox && nearestBoxDist < 55) dir=dir.add(dirTo(nearestBox.pos).mul(0.8));
      } else if(hillWantPowerup){
        // כוח-על בדרך — סטה לאסוף אותו ואז המשך לגבעה
        dir=dir.add(dirTo(nearestBox.pos).mul(1.4));
        dir=dir.add(dirTo(center).mul(0.8));
      } else if(nearHill){
        // קרוב לגבעה — כנס פנימה
        dir=dir.add(dirTo(center).mul(2.0));
        if(attackTarget && distTo(attackTarget)<HILL_R*2)
          dir=dir.add(dirTo(attackTarget.pos).mul(0.6));
      } else {
        // רחוק — רוץ לגבעה, אבל סטה לכוח-על בדרך
        if(nearestBox && nearestBoxDist < 70 && !this.powerups['speed'] && !this.powerups['strength'])
          dir=dir.add(dirTo(nearestBox.pos).mul(1.2));
        dir=dir.add(dirTo(center).mul(2.2));
      }
    } else if(attackTarget && !edgeDanger){
      let attackStrength = wantPowerup ? 0.6 : 1.2;
      dir=dir.add(dirTo(attackTarget.pos).mul(attackStrength));
    }

    // ווריאציה קטנה — כל בוט קצת שונה
    dir=dir.add(this.aiWander.mul(0.12));

    if(dir.mag()<0.001) dir=this.aiWander;
    dir=dir.norm();
    this.acc=dir.mul(this.powerups['speed']?BASE_SPEED*2:BASE_SPEED);
  }
  update(dt){
    if(!this.alive)return;
    if(this.frozen){ this.vel=this.vel.mul(FRICTION*0.5); this.pos=this.pos.add(this.vel); this.hitFlash=Math.max(0,this.hitFlash-0.05); return; }
    this.vel=this.vel.add(this.acc);
    this.vel=this.vel.mul(FRICTION);
    this.pos=this.pos.add(this.vel);
    this.acc=new Vec2(0,0); this.hitFlash=Math.max(0,this.hitFlash-0.05);
    this.trailPos.push(this.pos.copy()); if(this.trailPos.length>8)this.trailPos.shift();
  }
  draw(p){
    if(!this.alive)return;
    let c=this.getColor();
    let x=this.pos.x, y=this.pos.y;
    let R=this.r; // רדיוס בסיסי

    // ── שובל תנועה ──
    for(let i=0;i<this.trailPos.length;i++){
      let a=(i/this.trailPos.length);
      p.noStroke(); p.fill(c[0],c[1],c[2],a*28);
      p.ellipse(this.trailPos[i].x,this.trailPos[i].y,R*1.8*a,R*1.8*a);
    }

    // ── הילות כוחות-על ──
    if(this.powerups['shield']){p.noFill();p.stroke(80,150,255,110+Math.sin(p.frameCount*0.15)*55);p.strokeWeight(5);p.ellipse(x,y,(R+15)*2,(R+15)*2);}
    if(this.powerups['repulsor']){p.noFill();p.stroke(180,80,255,90+Math.sin(p.frameCount*0.2)*70);p.strokeWeight(4);p.ellipse(x,y,(R+24)*2,(R+24)*2);}
    if(this.powerups['strength']){p.noFill();p.stroke(255,130,0,90);p.strokeWeight(3);p.ellipse(x,y,(R+11)*2,(R+11)*2);}

    // ── גוף - עיגול גדול בצבע הלוחם ──
    // קפוא = תכלת
    let bodyR=this.frozen?100:c[0];
    let bodyG=this.frozen?200:c[1];
    let bodyB=this.frozen?255:c[2];

    // צל עדין מתחת
    p.noStroke(); p.fill(0,0,0,35);
    p.ellipse(x+4,y+5,R*2.1,R*2);

    // גוף עיקרי
    p.fill(bodyR,bodyG,bodyB);
    p.stroke(Math.max(0,bodyR-60),Math.max(0,bodyG-60),Math.max(0,bodyB-60));
    p.strokeWeight(2.5);
    p.ellipse(x,y,R*2,R*2);

    // ברק/הילה בהירה בפינה שמאל-עליונה (נותן עומק)
    p.noStroke(); p.fill(255,255,255,45);
    p.ellipse(x-R*0.28,y-R*0.28,R*0.85,R*0.75);

    // ── בגד (מאווש) - פס ברוחב הגוף התחתון ──
    // צבע כהה יותר מהגוף = הבגד
    let beltR=Math.max(0,c[0]-70), beltG=Math.max(0,c[1]-70), beltB=Math.max(0,c[2]-70);
    if(this.frozen){beltR=60;beltG=130;beltB=200;}
    p.fill(beltR,beltG,beltB);
    p.stroke(Math.max(0,beltR-30),Math.max(0,beltG-30),Math.max(0,beltB-30));
    p.strokeWeight(1.5);
    // קליפה תחתונה - רצועת הבגד
    p.beginShape();
    for(let a=0.1;a<Math.PI-0.1;a+=0.08){
      let ex=x+Math.cos(a+Math.PI)*R*0.98;
      let ey=y+Math.sin(a+Math.PI)*R*0.98;
      p.vertex(ex,ey);
    }
    p.vertex(x+R*0.98, y);
    p.vertex(x+R*0.85, y+R*0.3);
    p.vertex(x-R*0.85, y+R*0.3);
    p.vertex(x-R*0.98, y);
    p.endShape(p.CLOSE);

    // פס הבגד הקדמי (בהיר)
    p.fill(Math.min(255,c[0]+60),Math.min(255,c[1]+60),Math.min(255,c[2]+60));
    p.noStroke();
    p.ellipse(x, y+R*0.55, R*0.45, R*0.55);

    // ── ראש - עיגול קטן בצבע עור ──
    let headR=R*0.52;  // רדיוס ראש
    let headY=y-R*0.82; // מיקום ראש מעל הגוף

    // צל של ראש
    p.fill(0,0,0,25); p.noStroke();
    p.ellipse(x+2,headY+3,headR*2.1,headR*2);

    // ראש עיקרי - בז' חם
    let sR=this.frozen?160:245, sG=this.frozen?215:200, sB=this.frozen?255:162;
    p.fill(sR,sG,sB);
    p.stroke(50,35,18); p.strokeWeight(2);
    p.ellipse(x,headY,headR*2,headR*2);

    // ברק קטן בראש
    p.noStroke(); p.fill(255,255,255,40);
    p.ellipse(x-headR*0.25,headY-headR*0.25,headR*0.6,headR*0.5);

    // לחיים ורודות עדינות
    p.fill(225,130,120,100);
    p.ellipse(x-headR*0.55,headY+headR*0.05,headR*0.5,headR*0.32);
    p.ellipse(x+headR*0.55,headY+headR*0.05,headR*0.5,headR*0.32);

    // עיניים - שתי נקודות שחורות קטנות
    p.fill(25,15,8); p.noStroke();
    p.ellipse(x-headR*0.32,headY-headR*0.05,headR*0.18,headR*0.16);
    p.ellipse(x+headR*0.32,headY-headR*0.05,headR*0.18,headR*0.16);
    // ניצוץ בעיניים
    p.fill(255,255,255,200);
    p.ellipse(x-headR*0.28,headY-headR*0.09,headR*0.06,headR*0.06);
    p.ellipse(x+headR*0.36,headY-headR*0.09,headR*0.06,headR*0.06);

    // פה מחוייך קטן
    p.noFill(); p.stroke(120,60,50); p.strokeWeight(1.8);
    p.arc(x,headY+headR*0.28,headR*0.55,headR*0.32,0.1,Math.PI-0.1);

    // ── שיער קצר (ללא כובע) ──
    p.fill(22,16,10); p.noStroke();
    p.arc(x,headY-headR*0.1,headR*2,headR*1.8,Math.PI,Math.TWO_PI);

    // ── פצצה (Hot Potato) ──
    if(this.hasBomb){
      let t=this.bombTimer/BOMB_TIME;
      let pulse=Math.sin(p.frameCount*(0.12+(1-t)*0.45))*3;
      // t=1(חדש)=ירוק-צהוב, t=0(כמעט מתפוצץ)=אדום בוהק
      let br=255, bg=Math.floor(t*180), bb=0;
      p.fill(br,bg,bb,225); p.noStroke();
      p.ellipse(x,headY-headR-10+pulse,13,13);
      p.fill(255,Math.floor(t*60),0,190);
      p.ellipse(x,headY-headR-18+pulse,7,7);
      // timer bar: ירוק→אדום
      p.fill(255-Math.floor(t*255),Math.floor(t*200),0,210);
      p.rect(x-15,y+R+5,30*t,4,3);
    }

    // ── שם הלוחם ──
    p.fill(255,255,255,190); p.noStroke(); p.textAlign(p.CENTER,p.CENTER); p.textSize(9);
    p.text(this.name, x, y+R+14);
  }
  checkArena(center){ if(this.pos.sub(center).mag()+this.r>ARENA_R){this.alive=false;return true;} return false; }
  collide(other){
    if(!this.alive||!other.alive)return;
    let diff=this.pos.sub(other.pos), dist=diff.mag(), minD=this.r+other.r;
    if(dist<minD&&dist>0.01){
      let norm=diff.norm(), ov=minD-dist;
      this.pos=this.pos.add(norm.mul(ov*0.5)); other.pos=other.pos.add(norm.mul(-ov*0.5));
      let tp=this.powerups['strength']?PUSH_FORCE*3:PUSH_FORCE;
      let op=other.powerups['strength']?PUSH_FORCE*3:PUSH_FORCE;
      if(!other.powerups['shield']){ let rv=this.vel.sub(other.vel).dot(norm); if(rv>0)other.vel=other.vel.add(norm.mul(-rv*2.0)); other.vel=other.vel.add(norm.mul(-tp*0.9)); other.hitFlash=1; }
      if(!this.powerups['shield']){ let rv=other.vel.sub(this.vel).dot(norm); if(rv>0)this.vel=this.vel.add(norm.mul(-rv*2.0)); this.vel=this.vel.add(norm.mul(op*0.9)); this.hitFlash=1; }
      if(this.hasBomb&&!other.hasBomb&&!other.powerups['shield']){other.hasBomb=true;other.bombTimer=this.bombTimer;this.hasBomb=false;this.bombTimer=0;}
      else if(other.hasBomb&&!this.hasBomb&&!this.powerups['shield']){this.hasBomb=true;this.bombTimer=other.bombTimer;other.hasBomb=false;other.bombTimer=0;}
      if(this.powerups['repulsor'])other.vel=other.vel.add(norm.mul(-3));
      if(other.powerups['repulsor'])this.vel=this.vel.add(norm.mul(3));
    }
  }
}

// ============================================================
// משתנים גלובליים
// ============================================================
// ── פרופיל ──
// ── Firebase Auth ──
const firebaseConfig = {
  apiKey: "AIzaSyAwjO9nWCLHPc4nOfO26abwyhSHNvLVoXs",
  authDomain: "sumo-battle.firebaseapp.com",
  projectId: "sumo-battle",
  storageBucket: "sumo-battle.firebasestorage.app",
  messagingSenderId: "728804332870",
  appId: "1:728804332870:web:a12d56f3e02d47d880c147"
};
const firebaseAvailable = typeof firebase !== 'undefined' && typeof firebase.auth === 'function';
let fbAuth = null;
if (firebaseAvailable) {
  firebase.initializeApp(firebaseConfig);
  fbAuth = firebase.auth();
}

// ── פרופיל מקומי (localStorage) ──
const PROFILE_KEY='sumo_profile';
function loadProfile(){ try{ return JSON.parse(localStorage.getItem(PROFILE_KEY))||null; }catch(e){return null;} }
function saveProfile(pr){ try{ localStorage.setItem(PROFILE_KEY,JSON.stringify(pr)); }catch(e){} }
function defaultProfile(name,email,avatar){ return {name:name||'Player',email:email||null,avatar:avatar||null,googleUser:false,stats:{survival:{wins:0,losses:0},timeattack:{wins:0,losses:0},king:{wins:0,losses:0},potato:{wins:0,losses:0},tournament:{wins:0,losses:0}},created:Date.now()}; }
let profile=loadProfile();
if(profile){
  profile.stats=profile.stats||{};
  for(const mode of ['survival','timeattack','king','potato','tournament']){
    profile.stats[mode]=profile.stats[mode]||{wins:0,losses:0};
  }
}

// ── Email/Password Auth ──
function loginWithEmail(email, password, onSuccess, onError){
  if(!fbAuth){if(onError)onError('auth/unavailable');return;}
  fbAuth.signInWithEmailAndPassword(email, password).then(result=>{
    const user=result.user;
    if(!profile) profile=defaultProfile(user.displayName||email.split('@')[0], email, null);
    else { profile.email=email; profile.googleUser=true; }
    saveProfile(profile);
    if(typeof updateProfileBtn==='function') updateProfileBtn();
    if(typeof renderProfilePanel==='function') renderProfilePanel();
    if(onSuccess) onSuccess();
  }).catch(err=>{ if(onError) onError(err.code); });
}
function registerWithEmail(email, password, name, onSuccess, onError){
  if(!fbAuth){if(onError)onError('auth/unavailable');return;}
  fbAuth.createUserWithEmailAndPassword(email, password).then(result=>{
    const user=result.user;
    user.updateProfile({displayName: name}).catch(()=>{});
    if(!profile) profile=defaultProfile(name||email.split('@')[0], email, null);
    else { profile.name=name||profile.name; profile.email=email; profile.googleUser=true; }
    saveProfile(profile);
    if(typeof updateProfileBtn==='function') updateProfileBtn();
    if(typeof renderProfilePanel==='function') renderProfilePanel();
    if(onSuccess) onSuccess();
  }).catch(err=>{ if(onError) onError(err.code); });
}
function logoutGoogle(){
  if(!fbAuth)return;
  fbAuth.signOut().then(()=>{
    if(profile){ profile.googleUser=false; profile.email=null; saveProfile(profile); }
    if(typeof updateProfileBtn==='function') updateProfileBtn();
    if(typeof renderProfilePanel==='function') renderProfilePanel();
  });
}
// שמור תאימות עם קוד ישן
function loginWithGoogle(){ showEmailAuthPanel(); }
let gameState=STATE.MENU, fighters=[], powerupBoxes=[], particles=[], bgStars=[];
let profileTab='stats', profileNameInput='';
let profileAvatarImg=null;
let powerupSpawnPending=false; // מונע spawn כפול
let botSpawnPending=false; // מונע bot spawn מהיר מדי
let center, player;
let gameTimer=0, gameMessage='', gameMessageTimer=0;
let hillScores={};
let tourneyBracket=[], tourneyRound=0, tourneyMatchIdx=0, tourneyWinners=[], currentMatchFighters=[], lastRoundWinners=[];
let tourneySessionId=0; // מזהה ייחודי לכל טורניר — מבטל timeouts ישנים
let matchResolved=false;
let menuSelection=0, currentMode=STATE.SURVIVAL;
let botCount=3; // מספר בוטים שנבחר
let pendingMode=STATE.SURVIVAL; // המצב שממתין לאחר בחירת בוטים
let timeChoice=60; // זמן אתגר הזמן בשניות
let customTimeInput=''; // קלט מספרי לזמן מותאם
let hoveredPowerup=null;
// ── Touch joystick ──
let joystick={active:false,id:-1,baseX:0,baseY:0,dx:0,dy:0};
let touchActionBtn={active:false}; // כפתור פעולה // כוח-על שמרחפים מעליו (לטולטיפ)
let customTimeActive=false; // האם השדה הפתוח פעיל
let customTimeError=''; // הודעת שגיאה

// ============================================================
// פונקציות עזר
// ============================================================
function mkPlayer(cx,cy){ return new Fighter(cx,cy-130,true,0,T('playerName')); }
function mkBot(cx,cy,angle,ci,ni){ let bn=T('botNames'); return new Fighter(cx+Math.cos(angle)*140,cy+Math.sin(angle)*140,false,ci,bn[ni%bn.length]); }

function initSurvival(p){ fighters=[]; powerupBoxes=[]; player=mkPlayer(center.x,center.y); fighters.push(player); for(let i=0;i<botCount;i++)fighters.push(mkBot(center.x,center.y,(Math.PI*2/botCount)*i+Math.PI/2,i+1,i)); gameTimer=0; spawnPowerups(p); }
function initTimeAttack(p){ fighters=[]; powerupBoxes=[]; botSpawnPending=false; player=mkPlayer(center.x,center.y); fighters.push(player); for(let i=0;i<botCount;i++)fighters.push(mkBot(center.x,center.y,(Math.PI*2/botCount)*i,i+1,i)); gameTimer=timeChoice*1000; spawnPowerups(p); }
function initKing(p){
  fighters=[]; powerupBoxes=[]; hillScores={};
  player=mkPlayer(center.x,center.y); fighters.push(player); hillScores[T('playerName')]=0;
  for(let i=0;i<botCount;i++){let b=mkBot(center.x,center.y,(Math.PI*2/botCount)*i+Math.PI/2,i+1,i);fighters.push(b);hillScores[b.name]=0;}
  gameTimer=0; spawnPowerups(p);
}
function initPotato(p){
  fighters=[]; powerupBoxes=[]; player=mkPlayer(center.x,center.y); fighters.push(player);
  for(let i=0;i<botCount;i++)fighters.push(mkBot(center.x,center.y,(Math.PI*2/botCount)*i,i+1,i));
  if(fighters.length>1){ let bots=fighters.filter(f=>!f.isPlayer); let rb=bots[Math.floor(Math.random()*bots.length)]; rb.hasBomb=true; rb.bombTimer=BOMB_TIME; } gameTimer=0; spawnPowerups(p);
}
let currentRound=[];  // השחקנים בסיבוב הנוכחי
function initTournament(p){
  tourneyBracket=[]; tourneyRound=1; tourneyMatchIdx=0; tourneyWinners=[]; matchResolved=false; tourneySessionId++;
  let bn=T('botNames');
  for(let i=0;i<8;i++) tourneyBracket.push({name:i===0?T('playerName'):bn[(i-1)%bn.length],isPlayer:i===0,colorIdx:i===0?-1:(i-1),wins:0});
  // ערבב רנדומלית אבל שמור את השחקן
  let player0=tourneyBracket[0], bots=tourneyBracket.slice(1);
  for(let i=bots.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[bots[i],bots[j]]=[bots[j],bots[i]];}
  // מקם את השחקן במקום רנדומי
  let playerSlot=Math.floor(Math.random()*8);
  bots.splice(playerSlot,0,player0);
  tourneyBracket=bots;
  currentRound=[...tourneyBracket];
  tourneyWinners=[];
  advanceTourney(p); // מוצא את הקרב הראשון של השחקן, דולג על בוטים
}
// נקרא אחרי Enter על BRACKET: דולג בוטים לפני השחקן → מתחיל קרב
function advanceTourney(p){
  let total=Math.floor(currentRound.length/2);
  // דלג על בוטים לפני השחקן
  while(tourneyMatchIdx<total){
    let na=currentRound[tourneyMatchIdx*2], nb=currentRound[tourneyMatchIdx*2+1];
    if(na&&nb&&!na.isPlayer&&!nb.isPlayer){
      let w=Math.random()>0.5?na:nb;
      if(!tourneyWinners.some(x=>x.name===w.name)) tourneyWinners.push(w);
      tourneyMatchIdx++;
    } else { break; }
  }
  // מתחיל קרב שחקן ישירות (ללא setTimeout)
  matchResolved=false;
  startTourneyMatch(p);
}

// נקרא אחרי שהשחקן ניצח/הפסיד: דולג בוטים שאחריו → BRACKET או WIN/GAMEOVER
function finishRoundAndAdvance(p){
  let total=Math.floor(currentRound.length/2);
  // דלג על בוטים שנשארו
  while(tourneyMatchIdx<total){
    let na=currentRound[tourneyMatchIdx*2], nb=currentRound[tourneyMatchIdx*2+1];
    if(na&&nb){
      let w=Math.random()>0.5?na:nb;
      if(!tourneyWinners.some(x=>x.name===w.name)) tourneyWinners.push(w);
    }
    tourneyMatchIdx++;
  }
  if(!tourneyWinners.some(w=>w.isPlayer)){gameState=STATE.GAMEOVER;recordResult(false);return;}
  if(tourneyWinners.length===1&&currentRound.length===2){gameState=STATE.WIN;recordResult(true);return;}
  // שמור מנצחים ובנה סיבוב הבא
  lastRoundWinners=[...tourneyWinners];
  tourneyRound++; tourneyMatchIdx=0;
  let pw=tourneyWinners.find(w=>w.isPlayer);
  let bw=tourneyWinners.filter(w=>!w.isPlayer);
  for(let i=bw.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[bw[i],bw[j]]=[bw[j],bw[i]];}
  if(pw) bw.splice(Math.floor(Math.random()*(bw.length+1)),0,pw);
  currentRound=[...bw]; tourneyWinners=[];
  gameState=STATE.TOURNEY_BRACKET;
}

function startTourneyMatch(p){
  fighters=[]; powerupBoxes=[]; matchResolved=false;
  let mA=currentRound[tourneyMatchIdx*2], mB=currentRound[tourneyMatchIdx*2+1];
  if(!mA||!mB)return;
  // הגנה: אם אותו שחקן פעמיים (באג כפילות) - בטל כפילות מ-currentRound
  if(mA.name===mB.name){
    // הסר כפילויות מ-currentRound ואתחל מחדש
    let seen=new Set(), clean=[];
    for(let r of currentRound){ if(!seen.has(r.name)){seen.add(r.name);clean.push(r);} }
    currentRound=clean;
    mA=currentRound[tourneyMatchIdx*2]; mB=currentRound[tourneyMatchIdx*2+1];
    if(!mA||!mB)return;
  }
  let fa=new Fighter(center.x,center.y-130,mA.isPlayer,mA.colorIdx,mA.name);
  let fb=new Fighter(center.x,center.y+130,mB.isPlayer,mB.colorIdx,mB.name);
  fighters=[fa,fb]; currentMatchFighters=[mA,mB];
  player=fa.isPlayer?fa:(fb.isPlayer?fb:null);
  spawnPowerups(p);
  showMessage(T('fightMsg')+mA.name+T('vsMsg')+mB.name,2000);
}
function getTourneyRound(){ return currentRound; }

let _lastPowerupType='';
function loadAvatarFromProfile(p){
  if(!profile||!profile.avatar) return;
  let img=new Image(); img.src=profile.avatar;
  img.onload=()=>{
    let canvas=document.createElement('canvas');
    canvas.width=img.width; canvas.height=img.height;
    canvas.getContext('2d').drawImage(img,0,0);
    profileAvatarImg={canvas,width:img.width,height:img.height,_isCanvas:true};
  };
}

function recordResult(win){
  if(!profile) return;
  let mode=currentMode||gameState;
  const keyMap={survival:'survival',timeattack:'timeattack',king:'king',potato:'potato',tournament:'tournament'};
  let k=keyMap[mode];
  if(!k) return;
  if(!profile.stats[k]) profile.stats[k]={wins:0,losses:0};
  if(win) profile.stats[k].wins++; else profile.stats[k].losses++;
  saveProfile(profile);
}

function spawnOnePowerup(){
  let types=Object.keys(COLORS.powerups);
  // ערבב ובחר סוג שונה מהאחרון
  let pick; let tries=0;
  do {
    pick=types[Math.floor(Math.random()*types.length)];
    tries++;
  } while(pick===_lastPowerupType && tries<10);
  _lastPowerupType=pick;
  let a=Math.random()*Math.PI*2, d=60+Math.random()*130;
  powerupBoxes.push(new PowerUpBox(center.x+Math.cos(a)*d, center.y+Math.sin(a)*d, pick));
}
function spawnPowerups(p){
  powerupBoxes=[];
  powerupSpawnPending=false;
  _lastPowerupType='';
  spawnOnePowerup();
}
function showMessage(msg,dur){gameMessage=msg;gameMessageTimer=dur;}
function addParticles(x,y,col,n=12){ if(particles.length>400)return; for(let i=0;i<n;i++){let a=Math.random()*Math.PI*2,s=2+Math.random()*4;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,color:col,size:3+Math.random()*5});} }

// ============================================================
// p5.js
// ============================================================
new p5(function(p){
  const W=900, H=650;
  let lastTime=0;

  p.setup=function(){
    let cvs=p.createCanvas(W,H);
    cvs.elt.setAttribute('tabindex','0'); cvs.elt.focus();
    center=new Vec2(W/2,H/2);
    // כפתור פרופיל
    const profileBtn=document.getElementById('profile-btn');
    window.updateProfileBtn=function(){
      if(!profileBtn) return;
      profileBtn.textContent=profile?('👤 '+profile.name):(currentLang==='he'?'👤 פרופיל':'👤 Profile');
    };
    updateProfileBtn();
    document.getElementById('avatar-input').addEventListener('change',()=>setTimeout(()=>{updateProfileBtn();renderProfilePanel();},200));

    // ── פאנל פרופיל HTML ──
    const ppPanel=document.getElementById('profile-panel');
    const ppOverlay=document.getElementById('profile-overlay');
    const ppStatsView=document.getElementById('pp-stats-view');
    const ppEditView=document.getElementById('pp-edit-view');

    function renderProfilePanel(){
      const modeNames={survival:'⚔️ הישרדות',timeattack:'⏱️ אתגר זמן',king:'👑 מלך הגבעה',potato:'💣 פצצה',tournament:'🏆 טורניר'};
      // avatar
      const avImg=document.getElementById('pp-avatar-img');
      const avPh=document.getElementById('pp-avatar-placeholder');
      if(profile&&profile.avatar){ avImg.src=profile.avatar; avImg.style.display='block'; avPh.style.display='none'; }
      else if(profile&&profile.googlePhotoURL){ avImg.src=profile.googlePhotoURL; avImg.style.display='block'; avPh.style.display='none'; }
      else { avImg.style.display='none'; avPh.style.display='block'; }
      // name
      document.getElementById('pp-name').textContent=profile?profile.name:(currentLang==='he'?'שחקן':'Player');
      // email
      const emailEl=document.getElementById('pp-email');
      if(profile&&profile.googleUser&&profile.email){ emailEl.textContent='✅ '+profile.email; emailEl.style.display='block'; }
      else emailEl.style.display='none';
      // google btn
      const gBtn=document.getElementById('pp-google-btn');
      if(profile&&profile.googleUser){ gBtn.textContent=currentLang==='he'?'🔓 התנתק':'🔓 Sign Out'; gBtn.className='btn btn-red'; }
      else { gBtn.textContent=currentLang==='he'?'🔵 התחבר עם Google':'🔵 Sign in with Google'; gBtn.className='btn btn-blue'; }
      // stats table
      const st=document.getElementById('pp-stats');
      if(profile){
        st.innerHTML=Object.entries(modeNames).map(([k,n])=>{
          const s=profile.stats[k]||{wins:0,losses:0};
          const tot=s.wins+s.losses, pct=tot>0?Math.round(s.wins/tot*100):0;
          const bar=tot>0?`<div style="background:#1a1a2e;border-radius:4px;height:6px;width:120px;display:inline-block;vertical-align:middle"><div style="background:${pct>50?'#50dc78':'#ff6464'};height:6px;border-radius:4px;width:${pct*1.2}px"></div></div>`:'';
          return `<tr><td style="text-align:left">${n}</td><td style="color:#80ff98">✓${s.wins}</td><td style="color:#ff8080">✗${s.losses}</td><td>${tot>0?pct+'%':''} ${bar}</td></tr>`;
        }).join('');
      } else { st.innerHTML=''; }
    }

    function openProfilePanel(){
      ppStatsView.style.display='block'; ppEditView.style.display='none';
      ppPanel.style.display='block'; ppOverlay.style.display='block';
      renderProfilePanel();
    }
    function closeProfilePanel(){
      ppPanel.style.display='none'; ppOverlay.style.display='none';
    }

    // עצור כל event מהפאנל מלהגיע ל-canvas
    ppPanel.addEventListener('mousedown', e=>e.stopPropagation());
    ppPanel.addEventListener('mouseup',   e=>e.stopPropagation());
    ppPanel.addEventListener('click',     e=>e.stopPropagation());
    ppOverlay.addEventListener('mousedown', e=>e.stopPropagation());
    ppOverlay.addEventListener('mouseup',   e=>e.stopPropagation());
    ppOverlay.addEventListener('click', e=>{ e.stopPropagation(); closeProfilePanel(); });
    document.getElementById('pp-close-btn').addEventListener('click', e=>{ e.stopPropagation(); closeProfilePanel(); });
    document.getElementById('pp-avatar-wrap').addEventListener('click', e=>{ e.stopPropagation(); document.getElementById('avatar-input').click(); });
    document.getElementById('pp-edit-btn').addEventListener('click', e=>{
      e.stopPropagation();
      document.getElementById('pp-name-input').value=profile?profile.name:'';
      ppStatsView.style.display='none'; ppEditView.style.display='block';
      setTimeout(()=>document.getElementById('pp-name-input').focus(),50);
    });
    document.getElementById('pp-save-btn').addEventListener('click', e=>{
      e.stopPropagation();
      const name=document.getElementById('pp-name-input').value.trim()||'Player';
      if(!profile) profile=defaultProfile(name); else profile.name=name;
      saveProfile(profile); updateProfileBtn(); renderProfilePanel();
      ppStatsView.style.display='block'; ppEditView.style.display='none';
    });
    document.getElementById('pp-cancel-btn').addEventListener('click', e=>{
      e.stopPropagation();
      ppStatsView.style.display='block'; ppEditView.style.display='none';
    });
    // ── פאנל Email Auth ──
    let authMode='login';
    function switchAuthTab(mode){
      authMode=mode;
      document.getElementById('auth-tab-login').className='auth-tab'+(mode==='login'?' active':'');
      document.getElementById('auth-tab-register').className='auth-tab'+(mode==='register'?' active':'');
      document.getElementById('auth-name-row').style.display=mode==='register'?'block':'none';
      document.getElementById('auth-title').textContent=mode==='login'?'כניסה עם אימייל':'הרשמה חדשה';
      document.getElementById('auth-submit-btn').textContent=mode==='login'?'🔑 כניסה':'✨ הרשמה';
      document.getElementById('auth-error').textContent='';
    }
    function showEmailAuthPanel(){
      document.getElementById('auth-overlay').style.display='block';
      document.getElementById('auth-panel').style.display='block';
      document.getElementById('auth-email').value='';
      document.getElementById('auth-password').value='';
      document.getElementById('auth-name').value='';
      document.getElementById('auth-error').textContent='';
      switchAuthTab('login');
      setTimeout(()=>document.getElementById('auth-email').focus(),50);
    }
    function hideEmailAuthPanel(){
      document.getElementById('auth-overlay').style.display='none';
      document.getElementById('auth-panel').style.display='none';
    }
    function getAuthError(code){
      const errs={
        'auth/user-not-found':'משתמש לא נמצא',
        'auth/wrong-password':'סיסמה שגויה',
        'auth/email-already-in-use':'אימייל כבר רשום',
        'auth/invalid-email':'אימייל לא תקין',
        'auth/weak-password':'סיסמה חלשה מדי (6+ תווים)',
        'auth/too-many-requests':'יותר מדי ניסיונות, נסה מאוחר יותר',
        'auth/invalid-credential':'אימייל או סיסמה שגויים',
        'auth/unavailable':'שירות ההתחברות אינו זמין כרגע',
      };
      return errs[code]||('שגיאה: '+code);
    }
    document.getElementById('auth-submit-btn').addEventListener('click', e=>{
      e.stopPropagation();
      const email=document.getElementById('auth-email').value.trim();
      const password=document.getElementById('auth-password').value;
      const name=document.getElementById('auth-name').value.trim();
      const errEl=document.getElementById('auth-error');
      if(!email||!password){ errEl.textContent='נא למלא אימייל וסיסמה'; return; }
      errEl.textContent='⏳ מתחבר...';
      if(authMode==='login'){
        loginWithEmail(email,password,()=>hideEmailAuthPanel(),code=>{ errEl.textContent=getAuthError(code); });
      } else {
        if(password.length<6){ errEl.textContent='סיסמה חלשה מדי (6+ תווים)'; return; }
        registerWithEmail(email,password,name,()=>hideEmailAuthPanel(),code=>{ errEl.textContent=getAuthError(code); });
      }
    });
    document.getElementById('auth-tab-login').addEventListener('click', e=>{e.stopPropagation();switchAuthTab('login');});
    document.getElementById('auth-tab-register').addEventListener('click', e=>{e.stopPropagation();switchAuthTab('register');});
    document.getElementById('auth-cancel-btn').addEventListener('click', e=>{ e.stopPropagation(); hideEmailAuthPanel(); });
    document.getElementById('auth-overlay').addEventListener('click', e=>{ e.stopPropagation(); hideEmailAuthPanel(); });
    document.getElementById('auth-panel').addEventListener('mousedown', e=>e.stopPropagation());
    document.getElementById('auth-panel').addEventListener('click', e=>e.stopPropagation());
    document.getElementById('auth-email').addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('auth-password').focus(); });
    document.getElementById('auth-password').addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('auth-submit-btn').click(); });

    document.getElementById('pp-google-btn').addEventListener('click', e=>{
      e.stopPropagation();
      if(profile&&profile.googleUser) logoutGoogle(); else loginWithGoogle();
      setTimeout(()=>{renderProfilePanel();updateProfileBtn();},800);
    });
    document.getElementById('pp-name-input').addEventListener('keydown',e=>{
      if(e.key==='Enter') document.getElementById('pp-save-btn').click();
      if(e.key==='Escape') document.getElementById('pp-cancel-btn').click();
    });
    profileBtn.addEventListener('click', openProfilePanel);

    p.textFont('Arial');
    for(let i=0;i<120;i++) bgStars.push({x:Math.random()*W,y:Math.random()*H,s:Math.random()*2+0.3,b:Math.random()});
    lastTime=p.millis();
    loadAvatarFromProfile(p);

    // --- כפתור שפה ---
    // כפתור מסך מלא
    const fsBtn = document.getElementById('fullscreen-btn');
    fsBtn.addEventListener('click',()=>{
      if(!document.fullscreenElement){
        document.documentElement.requestFullscreen().catch(()=>{});
        fsBtn.textContent='✕';
      } else {
        document.exitFullscreen();
        fsBtn.textContent='⛶';
      }
    });
    document.addEventListener('fullscreenchange',()=>{
      fsBtn.textContent=document.fullscreenElement?'✕':'⛶';
    });

    document.addEventListener('click',e=>{ if(!e.target.closest('button')) return; setTimeout(()=>document.querySelector('canvas')&&document.querySelector('canvas').focus(),50); });
    // ── מוזיקת רקע עם Web Audio API ──
    (function initMusic(){
      let ctx=null, gainNode=null, playing=false, muted=false;
      const btn=document.getElementById('music-btn');

      function createCtx(){
        if(ctx) return;
        ctx=new (window.AudioContext||window.webkitAudioContext)();
        gainNode=ctx.createGain(); gainNode.gain.value=0.22; gainNode.connect(ctx.destination);
      }

      // מוזיקה פרוצדורלית — beat + melody
      const BPM=128, BEAT=60/BPM, BAR=BEAT*4;
      let nextBarTime=0, barCount=0;

      function scheduleBar(startT){
        const b=BEAT;
        function kick(t){
          let o=ctx.createOscillator(),g=ctx.createGain();
          o.connect(g);g.connect(gainNode);
          o.frequency.setValueAtTime(180,t);o.frequency.exponentialRampToValueAtTime(40,t+0.15);
          g.gain.setValueAtTime(1.1,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.25);
          o.start(t);o.stop(t+0.26);
        }
        function snare(t){
          let buf=ctx.createBuffer(1,ctx.sampleRate*0.15,ctx.sampleRate);
          let d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1);
          let s=ctx.createBufferSource(),g=ctx.createGain(),f=ctx.createBiquadFilter();
          f.type='bandpass';f.frequency.value=2200;f.Q.value=0.8;
          s.buffer=buf;s.connect(f);f.connect(g);g.connect(gainNode);
          g.gain.setValueAtTime(0.45,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.15);
          s.start(t);s.stop(t+0.16);
        }
        function hat(t,vol=0.16){
          let buf=ctx.createBuffer(1,ctx.sampleRate*0.05,ctx.sampleRate);
          let d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1);
          let s=ctx.createBufferSource(),g=ctx.createGain(),f=ctx.createBiquadFilter();
          f.type='highpass';f.frequency.value=9000;
          s.buffer=buf;s.connect(f);f.connect(g);g.connect(gainNode);
          g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.05);
          s.start(t);s.stop(t+0.06);
        }
        function bass(t,freq,dur){
          let o=ctx.createOscillator(),g=ctx.createGain(),f=ctx.createBiquadFilter();
          f.type='lowpass';f.frequency.value=280;
          o.type='sawtooth';o.frequency.value=freq;
          o.connect(f);f.connect(g);g.connect(gainNode);
          g.gain.setValueAtTime(0.45,t);g.gain.exponentialRampToValueAtTime(0.001,t+dur*0.88);
          o.start(t);o.stop(t+dur);
        }
        function lead(t,freq,dur,vol=0.13){
          let o=ctx.createOscillator(),g=ctx.createGain();
          o.type='square';o.frequency.value=freq;
          o.connect(g);g.connect(gainNode);
          g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(0.001,t+dur*0.82);
          o.start(t);o.stop(t+dur);
        }
        // drums
        for(let i=0;i<4;i++){
          let t=startT+i*b;
          if(i%2===0)kick(t);else snare(t);
          hat(t);hat(t+b*0.5,0.09);
        }
        // bass
        [[110,b*0.9],[110,b*0.9],[98,b*0.9],[110,b*0.9]]
          .forEach(([f,d],i)=>bass(startT+i*b,f,d));
        // melody — 4 bar phrase
        const phrase=barCount%4;
        const melodies=[
          [[220,.5],[246,.5],[261,.5],[293,.5]],
          [[329,.5],[293,.5],[261,.5],[246,1.0]],
          [[261,.5],[293,.5],[329,.5],[349,.5]],
          [[329,.75],[293,.5],[261,.5],[220,1.0]]
        ];
        melodies[phrase].forEach(([f,d],i)=>lead(startT+i*b*0.5,f*1,b*d*0.8));
        barCount++;
      }

      function playLoop(){
        if(!playing||muted) return;
        const now=ctx.currentTime;
        const SCHEDULE_AHEAD=BAR*2; // תזמן עד 2 bars קדימה
        let safety=0;
        while(nextBarTime<now+SCHEDULE_AHEAD && safety++<8){
          scheduleBar(nextBarTime);
          nextBarTime+=BAR;
        }
        setTimeout(playLoop, BAR*500); // בדוק כל bar
      }

      function start(){
        createCtx();
        if(ctx.state==='suspended') ctx.resume();
        playing=true; muted=false;
        nextBarTime=ctx.currentTime; barCount=0; // אפס כדי להתחיל מעכשיו
        btn.textContent='🔊'; playLoop();
      }
      function toggleMute(){
        muted=!muted;
        gainNode.gain.value=muted?0:0.22;
        btn.textContent=muted?'🔇':'🔊';
        if(!playing) start();
      }

      btn.addEventListener('click', toggleMute);
      // התחל אוטומטית בלחיצה ראשונה בדף
      document.addEventListener('click', function startOnce(){
        if(!playing){ start(); }
        document.removeEventListener('click', startOnce);
      }, {once:true});
    })();

    // ── Avatar upload ──
    document.getElementById('avatar-input').addEventListener('change', function(e){
      const file=e.target.files[0]; if(!file) return;
      const reader=new FileReader();
      reader.onload=function(ev){
        const img=new Image();
        img.onload=function(){
          // כיווץ מונע חריגה ממכסת localStorage ושומר על תצוגה מהירה.
          const canvas=document.createElement('canvas');
          canvas.width=128;canvas.height=128;
          const ctx2=canvas.getContext('2d');
          ctx2.drawImage(img,0,0,128,128);
          const data=canvas.toDataURL('image/jpeg',0.82);
          if(!profile) profile=defaultProfile('Player');
          profile.avatar=data;
          saveProfile(profile);
          profileAvatarImg={canvas,width:canvas.width,height:canvas.height,_isCanvas:true};
          updateProfileBtn();
          renderProfilePanel();
        };
        img.src=ev.target.result;
      };
      reader.readAsDataURL(file);
      e.target.value=''; // אפס כדי שניתן לבחור שוב אותו קובץ
    });

    document.getElementById('lang-btn').addEventListener('click',()=>{
      // החלפת שפה
      currentLang = currentLang==='he'?'en':'he';
      document.getElementById('lang-btn').textContent = T('langBtnLabel');
      document.documentElement.lang = currentLang==='he'?'he':'en';
      // עדכן שם שחקן בזמן ריצה
      if(player) player.name = T('playerName');
      // עדכן hillScores keys אם צריך
      let old=currentLang==='he'?LANG.en.playerName:LANG.he.playerName;
      let nw=T('playerName');
      if(hillScores[old]!==undefined){ hillScores[nw]=hillScores[old]; delete hillScores[old]; }
    });
  };

  p.draw=function(){
    let now=p.millis(), dt=Math.min(now-lastTime,100); lastTime=now;
    let isBattle=[STATE.SURVIVAL,STATE.TOURNAMENT,STATE.TIMEATTACK,STATE.KING,STATE.POTATO,STATE.GAMEOVER,STATE.WIN,STATE.BOT_SELECT,STATE.TIME_SELECT,STATE.SPECTATING].includes(gameState);
    if(isBattle) drawBattleBG(p); else drawBG(p);
    if(gameState===STATE.MENU) drawMenu(p);
    else if(gameState===STATE.BOT_SELECT){ drawArena(p); drawBotSelect(p); }
    else if(gameState===STATE.GAMEOVER){ drawArena(p);for(let f of fighters)f.draw(p);drawParticles(p);drawUI(p,dt);if(gameMessageTimer>0){gameMessageTimer-=dt;drawMsg(p);}drawGameOverScreen(p); }
    else if(gameState===STATE.WIN){ drawArena(p);for(let f of fighters)f.draw(p);drawParticles(p);drawUI(p,dt);if(gameMessageTimer>0){gameMessageTimer-=dt;drawMsg(p);}drawWinScreen(p); }
    else if(gameState===STATE.TOURNEY_BRACKET) drawBracket(p);
    else if(gameState===STATE.TIME_SELECT){ drawArena(p); drawTimeSelect(p); }
    else if(gameState===STATE.SPECTATING){
      updateGame(p,dt);
      drawArena(p);
      for(let b of powerupBoxes)b.draw(p);
      for(let f of fighters)f.draw(p);
      drawParticles(p);
      drawUI(p,dt);
      if(gameMessageTimer>0){gameMessageTimer-=dt;drawMsg(p);}
      drawSpectateOverlay(p);
    }
    else {
      updateGame(p,dt);
      drawArena(p);
      for(let b of powerupBoxes)b.draw(p);
      for(let f of fighters)f.draw(p);
      drawParticles(p);
      drawUI(p,dt);
      if(gameMessageTimer>0){gameMessageTimer-=dt;drawMsg(p);}
    }
  };

  // --- רקע ---
  function drawBG(p){
    // בזמן קרב הרקע יצויר בתוך drawArena; כאן רק לתפריט/bracket
    p.background(188,155,108);
    // ללא כוכבים - רקע חול אחיד
  }

  // --- רקע בזמן קרב (חול) ---
  function drawBattleBG(p){
    // רקע חום חולי לכל הקנבס
    p.background(188,155,108);
    // טקסטורת חול - נקודות קטנות אקראיות
    p.noStroke();
    let seed=42;
    for(let i=0;i<200;i++){
      seed=(seed*1103515245+12345)&0x7fffffff;
      let sx=(seed%W);
      seed=(seed*1103515245+12345)&0x7fffffff;
      let sy=(seed%H);
      seed=(seed*1103515245+12345)&0x7fffffff;
      let alpha=20+(seed%30);
      p.fill(160,128,85,alpha);
      p.ellipse(sx,sy,2,2);
    }
  }

  // --- זירה ---
  function drawArena(p){
    let cx=center.x, cy=center.y;

    // ── צל חיצוני (עומק) ──
    p.noStroke(); p.fill(0,0,0,40);
    p.ellipse(cx+6,cy+8,(ARENA_R+18)*2,(ARENA_R+18)*2);

    // ── רצפת חול מלאה בפנים הזירה ──
    p.fill(218,183,128); p.noStroke();
    p.ellipse(cx,cy,ARENA_R*2,ARENA_R*2);

    // ── גרדיאנט בטן (בהיר יותר במרכז) ──
    p.fill(232,200,148,80);
    p.ellipse(cx,cy,ARENA_R*1.2,ARENA_R*1.2);
    p.fill(242,215,165,50);
    p.ellipse(cx,cy,ARENA_R*0.7,ARENA_R*0.7);

    // ── טקסטורת חול קלה בתוך הזירה ──
    p.noStroke();
    let seed2=77;
    for(let i=0;i<80;i++){
      seed2=(seed2*1103515245+12345)&0x7fffffff;
      let angle=(seed2%628)/100;
      let r=((seed2>>4)%(ARENA_R-20));
      let sx=cx+Math.cos(angle)*r, sy=cy+Math.sin(angle)*r;
      seed2=(seed2*1103515245+12345)&0x7fffffff;
      p.fill(180,145,90,(seed2%25)+8);
      p.ellipse(sx,sy,3,2);
    }

    // ── קו גבול פנימי (מסורת - tawara) - חום כהה ──
    p.noFill(); p.stroke(100,60,20); p.strokeWeight(3);
    p.ellipse(cx,cy,(ARENA_R-8)*2,(ARENA_R-8)*2);

    // ── קו גבול חיצוני עבה ושחור - קו הפסילה ──
    p.noFill(); p.stroke(15,10,5); p.strokeWeight(9);
    p.ellipse(cx,cy,ARENA_R*2,ARENA_R*2);

    // ── קו לבן דק מסביב לקו השחור (ניגוד) ──
    p.stroke(200,180,140,80); p.strokeWeight(2);
    p.ellipse(cx,cy,(ARENA_R+5)*2,(ARENA_R+5)*2);

    // ── קו מרכזי (שikkiri-sen) ──
    p.stroke(100,60,20,120); p.strokeWeight(2);
    p.line(cx-30,cy,cx+30,cy);

    // ── שני קווי פתיחה (shikiri-sen) - מקווקוים ──
    p.stroke(100,60,20,180); p.strokeWeight(3);
    p.line(cx-6,cy-22,cx-6,cy-6);
    p.line(cx+6,cy-22,cx+6,cy-6);
    p.line(cx-6,cy+6,cx-6,cy+22);
    p.line(cx+6,cy+6,cx+6,cy+22);

    // ── גבעה (King of the Hill) ──
    if(gameState===STATE.KING||(gameState===STATE.SPECTATING&&currentMode===STATE.KING)){
      p.fill(255,210,60,35+Math.sin(p.frameCount*0.08)*15);
      p.stroke(200,150,30,180); p.strokeWeight(3);
      p.ellipse(cx,cy,HILL_R*2,HILL_R*2);
      p.noFill(); p.stroke(255,200,50,100); p.strokeWeight(1.5);
      p.ellipse(cx,cy,(HILL_R-10)*2,(HILL_R-10)*2);
    }
  }

  // --- עדכון ---
  function updateGame(p,dt){
    // קלט שחקן
    if(player&&player.alive){
      let ax=0,ay=0,spd=player.powerups['speed']?BASE_SPEED*2:BASE_SPEED;
      if(p.keyIsDown(65)||p.keyIsDown(p.LEFT_ARROW))ax-=spd;
      if(p.keyIsDown(68)||p.keyIsDown(p.RIGHT_ARROW))ax+=spd;
      if(p.keyIsDown(87)||p.keyIsDown(p.UP_ARROW))ay-=spd;
      if(p.keyIsDown(83)||p.keyIsDown(p.DOWN_ARROW))ay+=spd;
      player.acc=player.acc.add(new Vec2(ax,ay));
    }
    // עדכון לוחמים
    for(let f of fighters){
      if(!f.alive)continue;
      if(!f.isPlayer){
        f.updateAI(fighters,center,gameState===STATE.KING,(currentMode||gameState).replace("spectating","").trim()||gameState);
        // אפקט חלקיקים אם בוט הפעיל גל הדף
        if(f._blastTriggered){
          addParticles(f._blastTriggered.x,f._blastTriggered.y,[255,80,200],18);

          delete f._blastTriggered;
        }
      }
      f.update(dt); f.updatePowerups(dt); f.updateFreeze(dt);
      if(f.updateBomb(dt)){ addParticles(f.pos.x,f.pos.y,[255,150,0],20); showMessage(f.name+T('explodedMsg'),1500); }
      if(f.alive&&f.checkArena(center)){ addParticles(f.pos.x,f.pos.y,f.getColor(),15); showMessage(f.name+T('leftArena'),1200); if(f.isPlayer&&fighters.filter(x=>x.alive).length>1) gameState=STATE.SPECTATING; }
    }
    // התנגשויות
    for(let i=0;i<fighters.length;i++) for(let j=i+1;j<fighters.length;j++) if(fighters[i].alive&&fighters[j].alive) fighters[i].collide(fighters[j]);
    // רפולסור
    for(let f of fighters){
      if(!f.alive||!f.powerups['repulsor'])continue;
      for(let o of fighters){ if(o===f||!o.alive)continue; let diff=o.pos.sub(f.pos),d=diff.mag(); if(d<PLAYER_R*4&&d>0.01&&!o.powerups['shield']){ let force=Math.min(6, 2/(d*0.1)); o.vel=o.vel.add(diff.norm().mul(force)); } }
    }
    // כוחות-על
    for(let f of fighters){
      if(!f.alive)continue;
      for(let box of powerupBoxes){
        if(!box.alive)continue;
        if(f.pos.sub(box.pos).mag()<f.r+box.size){
          box.alive=false; f.applyPowerup(box.type); addParticles(box.pos.x,box.pos.y,[255,220,0],10);
          if(box.type==='blast'){ for(let o of fighters){if(o===f||!o.alive||o.powerups['shield'])continue; o.vel=o.vel.add(o.pos.sub(f.pos).norm().mul(8));} addParticles(f.pos.x,f.pos.y,[255,80,200],20); delete f.powerups['blast']; delete f.powerupTimers['blast']; } // blast הוא one-shot
          if(box.type==='freeze'){ for(let o of fighters){if(o===f||!o.alive||o.powerups['shield'])continue; o.frozen=true; o.frozenTimer=FREEZE_DURATION;} addParticles(f.pos.x,f.pos.y,[100,220,255],20); }
        }
      }
    }
    if(!powerupSpawnPending && powerupBoxes.filter(b=>b.alive).length<2){
      powerupSpawnPending=true;
      setTimeout(()=>{
        let bad=[STATE.MENU,STATE.GAMEOVER,STATE.WIN,STATE.TOURNEY_BRACKET,STATE.BOT_SELECT,STATE.TIME_SELECT];
        if(!bad.includes(gameState)) spawnOnePowerup();
        powerupSpawnPending=false;
      }, 4000+Math.random()*2000);
    }

    // ניצחון / הפסד
    if(gameState===STATE.SURVIVAL||(gameState===STATE.SPECTATING&&currentMode===STATE.SURVIVAL)){
      let al=fighters.filter(f=>f.alive);
      if(al.length===0){ gameState=STATE.GAMEOVER; } // כולם יצאו באותה פריים — הפסד
      else if(al.length===1){
        if(al[0].isPlayer){gameState=STATE.WIN;showMessage(T('survivalWin'),3000);recordResult(true);}
        else{gameState=STATE.GAMEOVER;recordResult(false);}
      }
    }
    if(gameState===STATE.TIMEATTACK||(gameState===STATE.SPECTATING&&currentMode===STATE.TIMEATTACK)){
      gameTimer-=dt;
      if(player&&player.alive&&gameTimer<=0){gameState=STATE.WIN;showMessage(T('timeWin'),3000);recordResult(true);}
      else if(gameTimer<=0){gameState=STATE.GAMEOVER;recordResult(false);}
      // spawn בוטים עם cooldown — מניעת spawn מהיר מדי
      if(fighters.filter(f=>f.alive&&!f.isPlayer).length<2 && !botSpawnPending){
        botSpawnPending=true;
        setTimeout(()=>{
          if(gameState!==STATE.TIMEATTACK&&!(gameState===STATE.SPECTATING&&currentMode===STATE.TIMEATTACK)){botSpawnPending=false;return;}
          let bn=T('botNames');
          let playerAngle=player&&player.alive?Math.atan2(player.pos.y-center.y,player.pos.x-center.x):0;
          let spawnAngle=playerAngle+Math.PI+(Math.random()-0.5)*1.2;
          let spawnDist=160+Math.random()*40;
          let usedNames=new Set(fighters.map(f=>f.name));
          let available=bn.filter(n=>!usedNames.has(n));
          let bname=available.length>0?available[Math.floor(Math.random()*available.length)]:bn[Math.floor(Math.random()*bn.length)]+'*';
          let ci=Math.floor(Math.random()*7)+1;
          fighters.push(new Fighter(center.x+Math.cos(spawnAngle)*spawnDist, center.y+Math.sin(spawnAngle)*spawnDist, false, ci, bname));
          // נקה לוחמים מתים מהmassive array (מעל 20 dead)
          let dead=fighters.filter(f=>!f.alive&&!f.isPlayer);
          if(dead.length>10) fighters=fighters.filter(f=>f.alive||f.isPlayer);
          botSpawnPending=false;
        }, 1200+Math.random()*800); // cooldown 1.2-2 שניות בין spawns
      }
    }
    if(gameState===STATE.KING||(gameState===STATE.SPECTATING&&currentMode===STATE.KING)){
      let inH=fighters.filter(f=>f.alive&&f.pos.sub(center).mag()<HILL_R);
      if(inH.length===1){
        let f=inH[0];
        hillScores[f.name]=(hillScores[f.name]||0)+dt*0.02; // ~25s לנצח
        if(hillScores[f.name]>=HILL_WIN_SCORE){
          if(f.isPlayer){gameState=STATE.WIN;recordResult(true);}else{gameState=STATE.GAMEOVER;recordResult(false);}
        }
      }
      let alK=fighters.filter(f=>f.alive);
      if(alK.length===0){ gameState=STATE.GAMEOVER; }
      else if(alK.length===1){ if(alK[0].isPlayer){gameState=STATE.WIN;recordResult(true);}else{gameState=STATE.GAMEOVER;recordResult(false);} }
    }
    if(gameState===STATE.POTATO||(gameState===STATE.SPECTATING&&currentMode===STATE.POTATO)){
      let al=fighters.filter(f=>f.alive);
      if(al.length===0){ gameState=STATE.GAMEOVER; }
      else if(al.length===1){ if(al[0].isPlayer){gameState=STATE.WIN;recordResult(true);}else{gameState=STATE.GAMEOVER;recordResult(false);} }
      if(!fighters.some(f=>f.alive&&f.hasBomb)&&al.length>1){ let rb=al[Math.floor(Math.random()*al.length)]; rb.hasBomb=true; rb.bombTimer=BOMB_TIME; }
    }
    if(gameState===STATE.TOURNAMENT||(gameState===STATE.SPECTATING&&currentMode===STATE.TOURNAMENT)){
      let al=fighters.filter(f=>f.alive);
      if(al.length===1 && !matchResolved){
        matchResolved=true;
        let winner=al[0];
        let winnerData=currentMatchFighters.find(m=>m.name===winner.name);
        if(!winnerData){ winnerData=currentMatchFighters.find(m=>!m.isPlayer)||currentMatchFighters[1]||currentMatchFighters[0]; } // fallback: בוט, לא שחקן
        if(!tourneyWinners.some(w=>w.name===winnerData.name)){
          tourneyWinners.push(winnerData);
        }
        tourneyMatchIdx++;
        // אם השחקן הפסיד (SPECTATING), חזור ל-TOURNAMENT כדי שfinishRoundAndAdvance יוכל לרוץ
        if(gameState===STATE.SPECTATING) gameState=STATE.TOURNAMENT;
        finishRoundAndAdvance(p);
      }
    }
  }

  // --- חלקיקים ---
  function drawParticles(p){
    for(let i=particles.length-1;i>=0;i--){
      let pt=particles[i];
      pt.x+=pt.vx; pt.y+=pt.vy; pt.vx*=0.93; pt.vy*=0.93; pt.life-=0.03;
      if(pt.life<=0){particles.splice(i,1);continue;}
      p.noStroke(); p.fill(pt.color[0],pt.color[1],pt.color[2],pt.life*220);
      p.ellipse(pt.x,pt.y,pt.size*pt.life,pt.size*pt.life);
    }
  }

  // --- UI ---
  function drawUI(p,dt){
    p.fill(0,0,0,130); p.noStroke(); p.rect(0,0,W,52,0,0,8,8);
    p.fill(255,255,255,200); p.textAlign(p.LEFT,p.CENTER); p.textSize(14);
    if(profile){p.fill(60,200,255,150);p.text('👤 '+profile.name,145,26);}
    let _gs=(gameState===STATE.SPECTATING?currentMode:gameState);
    let mi=MODE_KEYS.indexOf(_gs), modes=T('modes');
    p.text(mi>=0?(modes[mi].icon+' '+modes[mi].label):'⚔️',15,26);
    p.textAlign(p.CENTER,p.CENTER);
    p.text(T('bots')+fighters.filter(f=>f.alive&&!f.isPlayer).length,W/2,26);
    p.textAlign(p.RIGHT,p.CENTER);
    if(gameState===STATE.TIMEATTACK||(gameState===STATE.SPECTATING&&currentMode===STATE.TIMEATTACK)){
      let sec=Math.max(0,Math.ceil(gameTimer/1000));
      let mins=Math.floor(sec/60), secs=sec%60;
      let timeStr=(mins>0?mins+':'+(secs<10?'0':'')+secs:secs+'s');
      let urgent=sec<=10;
      // טיימר קטן בפינה
      p.fill(urgent?255:220, urgent?80:220, urgent?80:220, 200);
      p.textSize(14); p.textAlign(p.RIGHT,p.CENTER);
      p.text('⏱ '+timeStr, W-15, 26);
      // טיימר גדול ובולט במרכז - מעל הזירה
      let pulse=urgent?Math.sin(p.frameCount*0.25)*8:0;
      let bigSize=urgent?44+pulse:36;
      p.textAlign(p.CENTER,p.CENTER); p.textSize(bigSize);
      // צל
      p.fill(0,0,0,120); p.noStroke();
      p.text(timeStr, W/2+2, 82);
      // טקסט ראשי
      p.fill(urgent?255:255, urgent?60:230, urgent?60:80, 230+pulse*3);
      p.text(timeStr, W/2, 80);
      // פס רקע לטיימר
      p.noFill(); p.stroke(urgent?255:200, urgent?60:200, urgent?60:80, 60);
      p.strokeWeight(2);
      p.rect(W/2-55,62,110,36,8);
    } else if(gameState===STATE.KING||(gameState===STATE.SPECTATING&&currentMode===STATE.KING)){
      p.fill(255,220,80,220);
      p.text(T('scoreOf')+Math.floor(hillScores[T('playerName')]||0)+'/'+HILL_WIN_SCORE,W-15,26);
    } else {
      p.fill(255,255,255,200);
      p.text(T('alive')+fighters.filter(f=>f.alive).length,W-15,26);
    }
    // כוחות-על
    hoveredPowerup=null;
    if(player&&player.alive){
      let pw=Object.keys(player.powerups); let x=15;
      for(let type of pw){
        let c=COLORS.powerups[type];
        let isHov=p.mouseX>=x&&p.mouseX<=x+36&&p.mouseY>=H-42&&p.mouseY<=H-14;
        if(isHov) hoveredPowerup=type;
        // רקע כוח-על (מוגדל בהובר)
        p.fill(c[0],c[1],c[2],isHov?240:200); p.noStroke();
        p.rect(x,H-42,36,28,6);
        p.fill(255,255,255,220); p.textAlign(p.CENTER,p.CENTER); p.textSize(18);
        p.text({speed:'⚡',strength:'💪',shield:'🛡',blast:'💥',freeze:'❄',repulsor:'🔮'}[type]||'?',x+18,H-28);
        p.fill(c[0],c[1],c[2],160); p.rect(x,H-16,36*(player.powerupTimers[type]/POWERUP_DURATION),5,3);
        // כפתור ? קטן
        p.fill(255,255,255,isHov?220:120); p.noStroke();
        p.ellipse(x+30,H-44,12,12);
        p.fill(30,20,10,200); p.textSize(9); p.textAlign(p.CENTER,p.CENTER);
        p.text('?',x+30,H-44);
        x+=44;
      }
    }
    // טולטיפ כוח-על
    if(hoveredPowerup){
      let desc=T('powerupDescs')[hoveredPowerup];
      if(desc){
        let tw=Math.max(180, p.textWidth(desc.desc)+24);
        let tx=p.mouseX-tw/2, ty=H-105;
        tx=Math.max(5,Math.min(W-tw-5,tx));
        p.fill(0,0,0,200); p.noStroke(); p.rect(tx,ty,tw,54,10);
        p.fill(255,220,80,230); p.textSize(13); p.textAlign(p.LEFT,p.CENTER);
        p.text(desc.icon+' '+desc.name, tx+12, ty+16);
        p.fill(210,220,240,200); p.textSize(11);
        p.text(desc.desc, tx+12, ty+36);
      }
    }
    // King of Hill scoreboard
    if(gameState===STATE.KING||(gameState===STATE.SPECTATING&&currentMode===STATE.KING)){
      // מיין לפי ניקוד יורד
      let alive=fighters.filter(f=>f.alive);
      let sorted=[...alive].sort((a,b)=>(hillScores[b.name]||0)-(hillScores[a.name]||0));
      let sx=W-178, sy=62;
      p.fill(0,0,0,160); p.noStroke(); p.rect(sx-10,sy-10,188,sorted.length*24+20,8);
      p.stroke(255,200,50,80); p.strokeWeight(1); p.noFill();
      p.rect(sx-10,sy-10,188,sorted.length*24+20,8); p.noStroke();
      for(let i=0;i<sorted.length;i++){
        let f=sorted[i];
        let pct=(hillScores[f.name]||0)/HILL_WIN_SCORE;
        // פס התקדמות
        p.fill(f.getColor()[0],f.getColor()[1],f.getColor()[2],40);
        p.rect(sx-8,sy+i*24-2,Math.max(0,pct*172),20,3);
        let col=f.getColor();
        p.fill(col[0],col[1],col[2],f.isPlayer?255:200);
        p.textAlign(p.LEFT,p.TOP); p.textSize(13);
        p.text((f.isPlayer?'⭐ ':'')+f.name+': '+Math.floor(hillScores[f.name]||0),sx,sy+i*24);
      }
    }
    // Potato mode: bomb holder indicator
    if((gameState===STATE.POTATO)||(gameState===STATE.SPECTATING&&currentMode===STATE.POTATO)){
      let bomber=fighters.find(f=>f.alive&&f.hasBomb);
      if(bomber){
        let t=bomber.bombTimer/BOMB_TIME;
        let urgent=t<0.3;
        let sec=Math.max(0,(bomber.bombTimer/1000)).toFixed(1);
        let br=255, bg=Math.floor(t*180);
        // רקע
        let label=(bomber.isPlayer?(currentLang==='he'?'💣 אצלך! ':'💣 YOU have it! '):'💣 '+(bomber.name)+': ');
        let txt=label+sec+'s';
        let tw=200;
        p.fill(0,0,0,180); p.noStroke(); p.rect(W/2-tw/2,H/2-78,tw,30,8);
        p.fill(br,bg,0,urgent?230+Math.sin(p.frameCount*0.4)*25:200);
        p.textAlign(p.CENTER,p.CENTER); p.textSize(urgent?16:14);
        p.text(txt,W/2,H/2-63);
      }
    }
    p.fill(255,255,255,60); p.textAlign(p.CENTER,p.BOTTOM); p.textSize(11);
    p.text(T('controls'),W/2,H-8);
  }

  function drawMsg(p){
    let alpha=Math.min(255,gameMessageTimer*0.5);
    p.fill(0,0,0,alpha*0.6); p.noStroke();
    let tw=p.textWidth(gameMessage)+40;
    p.rect(W/2-tw/2,H/2-28,tw,46,10);
    p.fill(255,255,255,alpha); p.textAlign(p.CENTER,p.CENTER); p.textSize(20);
    p.text(gameMessage,W/2,H/2);
  }

  // --- תפריט ---
  function drawMenu(p){
    p.textAlign(p.CENTER,p.TOP);
    p.fill(255,200,50,230+Math.sin(p.frameCount*0.05)*25); p.textSize(48);
    p.text(T('title'),W/2,36);
    p.fill(200,220,255,120); p.textSize(15); p.text(T('selectMode'),W/2,98);
    let modes=T('modes'), cW=740,cH=72,sY=130;
    for(let i=0;i<modes.length;i++){
      let m=modes[i], y=sY+i*(cH+10);
      let sel=menuSelection===i;
      let hov=p.mouseX>W/2-cW/2&&p.mouseX<W/2+cW/2&&p.mouseY>y&&p.mouseY<y+cH;
      let act=sel||hov;
      if(act){p.fill(255,200,80,30);p.noStroke();p.rect(W/2-cW/2+4,y+4,cW,cH,14);}
      p.fill(act?255:200,act?200:180,act?80:120,act?50:25);
      p.stroke(act?255:150,act?200:160,act?80:80,act?200:80); p.strokeWeight(act?2.5:1.5);
      p.rect(W/2-cW/2,y,cW,cH,14);
      p.noStroke(); p.fill(255,255,255,200); p.textAlign(p.LEFT,p.CENTER); p.textSize(32);
      p.text(m.icon,W/2-cW/2+20,y+cH/2);
      p.fill(act?255:220,act?230:215,act?100:180,230); p.textSize(20); p.textAlign(p.LEFT,p.CENTER);
      p.text(m.label,W/2-cW/2+68,y+cH/2-10);
      p.fill(200,210,230,160); p.textSize(13);
      p.text(m.desc,W/2-cW/2+68,y+cH/2+14);
      if(act){p.fill(255,220,80,220);p.textAlign(p.RIGHT,p.CENTER);p.textSize(24);p.text('▶',W/2+cW/2-20,y+cH/2);}
    }
    // פאנל כוחות מיוחדים בתחתית התפריט
    let pDescs=T('powerupDescs'), pKeys=Object.keys(pDescs);
    let panelW=740, panelH=56, panelX=W/2-panelW/2, panelY=H-74;
    p.fill(0,0,0,100); p.noStroke(); p.rect(panelX,panelY,panelW,panelH,12);
    p.fill(255,220,80,180); p.textAlign(p.LEFT,p.CENTER); p.textSize(11);
    p.text(T('powerupsTitle')+':  ', panelX+10, panelY+panelH/2);
    let labelW=p.textWidth(T('powerupsTitle')+':  ');
    let itemW=(panelW-labelW-20)/pKeys.length;
    for(let i=0;i<pKeys.length;i++){
      let key=pKeys[i], d=pDescs[key];
      let c=COLORS.powerups[key];
      let ix=panelX+labelW+10+i*itemW, iy=panelY;
      let hov=p.mouseX>=ix&&p.mouseX<=ix+itemW&&p.mouseY>=iy&&p.mouseY<=iy+panelH;
      // אייקון
      p.fill(c[0],c[1],c[2],hov?220:150); p.noStroke();
      p.rect(ix+2,iy+8,22,22,5);
      p.fill(255,255,255,220); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
      p.text(d.icon, ix+13, iy+19);
      // שם
      p.fill(hov?255:200, hov?240:210, hov?120:180, hov?230:160);
      p.textSize(10); p.textAlign(p.LEFT,p.CENTER);
      p.text(d.name, ix+28, iy+19);
      // טולטיפ בהובר
      if(hov){
        let tw=Math.max(170,p.textWidth(d.desc)+24);
        let tx=ix, ty=panelY-62;
        tx=Math.max(5,Math.min(W-tw-5,tx));
        p.fill(0,0,0,210); p.noStroke(); p.rect(tx,ty,tw,54,10);
        p.fill(255,220,80,230); p.textSize(13); p.textAlign(p.LEFT,p.CENTER);
        p.text(d.icon+' '+d.name, tx+10, ty+16);
        p.fill(210,220,240,200); p.textSize(11);
        p.text(d.desc, tx+10, ty+36);
      }
    }
    p.fill(180,200,220,120); p.textAlign(p.CENTER,p.BOTTOM); p.textSize(12);
    p.text(T('menuHint'),W/2,H-16);
  }

  // --- מסך בחירת מספר יריבים ---
  function drawBotSelect(p){
    // רקע כהה
    p.fill(0,0,0,200); p.noStroke(); p.rect(W/2-280,H/2-180,560,360,22);

    // כותרת
    p.fill(255,220,80,240+Math.sin(p.frameCount*0.07)*15);
    p.textAlign(p.CENTER,p.CENTER); p.textSize(28);
    p.text(T('chooseBots'),W/2,H/2-130);

    // מציג שם המצב שנבחר
    let modeIdx=MODE_KEYS.indexOf(pendingMode), modes=T('modes');
    if(modeIdx>=0){
      p.fill(180,200,255,160); p.textSize(15);
      p.text(modes[modeIdx].icon+' '+modes[modeIdx].label, W/2, H/2-98);
    }

    // כפתורי בחירה 1-7
    let maxBots=7, btnW=58, btnH=58, gap=14;
    let totalW=maxBots*(btnW+gap)-gap;
    let startX=W/2-totalW/2;
    let by=H/2-50;

    for(let i=1;i<=maxBots;i++){
      let bx=startX+(i-1)*(btnW+gap);
      let sel=botCount===i;
      // צל
      if(sel){ p.fill(255,200,80,25); p.noStroke(); p.rect(bx+3,by+3,btnW,btnH,14); }
      // רקע כפתור
      p.fill(sel?255:60, sel?200:80, sel?80:120, sel?80:40);
      p.stroke(sel?255:120, sel?220:140, sel?80:80, sel?240:100);
      p.strokeWeight(sel?3:1.5);
      p.rect(bx,by,btnW,btnH,12);
      // מספר
      p.fill(sel?255:200, sel?240:220, sel?100:200, 230);
      p.noStroke(); p.textSize(sel?30:24); p.textAlign(p.CENTER,p.CENTER);
      p.text(i, bx+btnW/2, by+btnH/2-4);
      // מילה קטנה מתחת
      p.fill(sel?255:160, sel?220:180, sel?100:180, sel?200:120);
      p.textSize(9);
      let word = i===1?(currentLang==='he'?'יריב':T('opponent')):(currentLang==='he'?'יריבים':T('opponents'));
      p.text(word, bx+btnW/2, by+btnH/2+14);
    }

    // תצוגה מקדימה - דמויות בסגנון זהה לקרב
    let previewY=H/2+70;
    p.fill(180,200,255,100); p.noStroke(); p.textSize(12); p.textAlign(p.CENTER,p.CENTER);
    p.text(currentLang==='he'?'תצוגה מקדימה:':'Preview:',W/2,previewY-38);
    let allCount=botCount+1, spacing=58;
    let px=W/2-(allCount-1)*spacing/2;
    for(let i=0;i<allCount;i++){
      let isP=i===0;
      let col=isP?COLORS.player:COLORS.botColors[i%COLORS.botColors.length];
      let fx=px+i*spacing, fy=previewY;
      let R=20; // רדיוס קטן לתצוגה מקדימה

      // צל
      p.noStroke(); p.fill(0,0,0,30);
      p.ellipse(fx+2,fy+3,R*2.2,R*2.1);

      // גוף עיגול
      p.fill(col[0],col[1],col[2]);
      p.stroke(Math.max(0,col[0]-60),Math.max(0,col[1]-60),Math.max(0,col[2]-60));
      p.strokeWeight(2);
      p.ellipse(fx,fy,R*2,R*2);

      // ברק
      p.noStroke(); p.fill(255,255,255,40);
      p.ellipse(fx-R*0.28,fy-R*0.28,R*0.85,R*0.72);

      // בגד (רצועה תחתונה כהה)
      let bR=Math.max(0,col[0]-70),bG=Math.max(0,col[1]-70),bB=Math.max(0,col[2]-70);
      p.fill(bR,bG,bB); p.stroke(Math.max(0,bR-30),Math.max(0,bG-30),Math.max(0,bB-30));
      p.strokeWeight(1.2);
      p.beginShape();
      for(let a=0.1;a<Math.PI-0.1;a+=0.1){
        p.vertex(fx+Math.cos(a+Math.PI)*R*0.97,fy+Math.sin(a+Math.PI)*R*0.97);
      }
      p.vertex(fx+R*0.97,fy); p.vertex(fx+R*0.82,fy+R*0.3);
      p.vertex(fx-R*0.82,fy+R*0.3); p.vertex(fx-R*0.97,fy);
      p.endShape(p.CLOSE);
      // פס קדמי בהיר
      p.fill(Math.min(255,col[0]+60),Math.min(255,col[1]+60),Math.min(255,col[2]+60));
      p.noStroke();
      p.ellipse(fx,fy+R*0.55,R*0.44,R*0.52);

      // ראש
      let hR=R*0.52, hY=fy-R*0.82;
      p.fill(0,0,0,22); p.noStroke();
      p.ellipse(fx+2,hY+3,hR*2.1,hR*2);
      p.fill(245,200,162); p.stroke(50,35,18); p.strokeWeight(1.8);
      p.ellipse(fx,hY,hR*2,hR*2);
      // ברק ראש
      p.noStroke(); p.fill(255,255,255,38);
      p.ellipse(fx-hR*0.25,hY-hR*0.25,hR*0.58,hR*0.48);
      // לחיים
      p.fill(225,130,120,90);
      p.ellipse(fx-hR*0.55,hY+hR*0.05,hR*0.5,hR*0.3);
      p.ellipse(fx+hR*0.55,hY+hR*0.05,hR*0.5,hR*0.3);
      // עיניים
      p.fill(25,15,8); p.noStroke();
      p.ellipse(fx-hR*0.32,hY-hR*0.05,hR*0.18,hR*0.16);
      p.ellipse(fx+hR*0.32,hY-hR*0.05,hR*0.18,hR*0.16);
      // ניצוץ
      p.fill(255,255,255,190);
      p.ellipse(fx-hR*0.27,hY-hR*0.09,hR*0.06,hR*0.06);
      p.ellipse(fx+hR*0.37,hY-hR*0.09,hR*0.06,hR*0.06);
      // פה
      p.noFill(); p.stroke(120,60,50); p.strokeWeight(1.5);
      p.arc(fx,hY+hR*0.28,hR*0.55,hR*0.3,0.1,Math.PI-0.1);
      // שיער
      p.fill(22,16,10); p.noStroke();
      p.arc(fx,hY-hR*0.1,hR*2,hR*1.8,Math.PI,Math.PI*2);

      // כוכב קטן מתחת לשחקן הראשי
      if(isP){
        let starY=fy+R+10;
        let starSize=7+Math.sin(p.frameCount*0.12)*1.5;
        p.noStroke();
        p.fill(60,200,255,220+Math.sin(p.frameCount*0.12)*35);
        // ציור כוכב 5 קצוות
        p.beginShape();
        for(let s=0;s<10;s++){
          let a=Math.PI/2+s*(Math.PI*2/10);
          let r2=s%2===0?starSize:starSize*0.42;
          p.vertex(fx+Math.cos(a)*r2, starY+Math.sin(a)*r2);
        }
        p.endShape(p.CLOSE);
      }
    }

    // רמז תחתית
    p.fill(180,200,220,140); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
    p.text(T('botsHint'),W/2,H/2+145);
  }

  function drawTimeSelect(p){
    p.fill(0,0,0,200); p.noStroke(); p.rect(W/2-300,H/2-185,600,370,22);
    p.fill(255,220,80,240+Math.sin(p.frameCount*0.07)*15);
    p.textAlign(p.CENTER,p.CENTER); p.textSize(28);
    p.text(T('chooseTime'),W/2,H/2-132);
    p.fill(180,200,255,150); p.textSize(14);
    p.text('⏱️ '+(currentLang==='he'?'אתגר זמן':'Time Attack')+' · '+(botCount+1)+' '+(currentLang==='he'?'שחקנים':'players'),W/2,H/2-100);

    // כפתורי זמן מהיר
    let times=[30,60,120,180,300];
    let btnW=72, btnH=56, gap=12;
    let totalW=times.length*(btnW+gap)-gap;
    let startX=W/2-totalW/2;
    let by=H/2-60;
    for(let i=0;i<times.length;i++){
      let t=times[i], bx=startX+i*(btnW+gap);
      let sel=!customTimeActive&&timeChoice===t;
      if(sel){p.fill(255,200,80,25);p.noStroke();p.rect(bx+3,by+3,btnW,btnH,14);}
      p.fill(sel?255:60,sel?200:80,sel?80:120,sel?80:40);
      p.stroke(sel?255:120,sel?220:140,sel?80:80,sel?240:100);
      p.strokeWeight(sel?3:1.5);
      p.rect(bx,by,btnW,btnH,12);
      let label=t>=60?String(Math.floor(t/60)):(t+'');
      let unit=t>=60?(currentLang==='he'?'דקות':'min'):T('seconds');
      p.fill(sel?255:200,sel?240:220,sel?100:200,230);
      p.noStroke(); p.textSize(sel?24:19); p.textAlign(p.CENTER,p.CENTER);
      p.text(label,bx+btnW/2,by+btnH/2-4);
      p.fill(sel?255:160,sel?220:180,sel?100:180,sel?200:120);
      p.textSize(9);
      p.text(unit,bx+btnW/2,by+btnH/2+13);
    }

    // שדה קלט מותאם אישית
    let inputW=220, inputH=50, inputX=W/2-inputW/2, inputY=H/2+28;
    p.fill(180,200,255,130); p.noStroke(); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
    p.text(currentLang==='he'?'או הקלד זמן בשניות:':'Or type custom time (seconds):',W/2,inputY-18);
    // מסגרת שדה
    let inputActive=customTimeActive;
    p.fill(inputActive?255:40, inputActive?240:60, inputActive?200:80, inputActive?90:50);
    p.stroke(inputActive?255:150, inputActive?220:170, inputActive?80:80, inputActive?240:120);
    p.strokeWeight(inputActive?3:1.5);
    p.rect(inputX,inputY,inputW,inputH,10);
    // תוכן השדה
    let displayText=customTimeInput.length>0?customTimeInput:(inputActive?'':'...');
    let cursor=inputActive&&Math.floor(p.frameCount/30)%2===0?'|':'';
    p.fill(inputActive?255:180, inputActive?255:200, inputActive?255:220, 220);
    p.noStroke(); p.textSize(22); p.textAlign(p.CENTER,p.CENTER);
    p.text(displayText+cursor, W/2, inputY+inputH/2);

    // כפתור אישור לקלט מותאם
    if(customTimeInput.length>0){
      let confirmX=W/2+inputW/2+10, confirmY=inputY;
      p.fill(80,200,80,200); p.stroke(40,150,40); p.strokeWeight(2);
      p.rect(confirmX,confirmY,54,inputH,10);
      p.fill(255,255,255,230); p.noStroke(); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
      p.text(currentLang==='he'?'אישור':'OK', confirmX+27, confirmY+inputH/2);
    }

    // הודעת שגיאה
    if(customTimeError.length>0){
      p.fill(255,80,80,220); p.noStroke(); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
      p.text(customTimeError,W/2,H/2+82);
    }
    p.fill(180,200,220,120); p.textSize(11); p.textAlign(p.CENTER,p.CENTER);
    p.text(currentLang==='he'?'לחץ על כפתור או הקלד → אנטר לאישור  |  רווח = חזרה':'Click preset or type → Enter to confirm  |  Space = back',W/2,customTimeError?H/2+108:H/2+100);
  }

  function drawSpectateOverlay(p){
    p.fill(0,0,0,160); p.noStroke();
    p.rect(0,H-80,W,80);

    if(currentMode===STATE.TOURNAMENT){
      // בטורניר: רק הודעה, בלי כפתורים — הקרב נגמר אוטומטית
      p.fill(255,120,80,230); p.textAlign(p.CENTER,p.CENTER); p.textSize(15);
      p.text(currentLang==='he'?'💀 הושלכת! צופה בהמשך הקרב...':'💀 Eliminated! Watching the match...', W/2, H-40);
    } else {
      // מצבים אחרים: כפתורי שחק מחדש ותפריט
      p.fill(255,220,100,230); p.textAlign(p.CENTER,p.CENTER); p.textSize(15);
      p.text(currentLang==='he'?'💀 נפסלת! הקרב ממשיך...':'💀 Eliminated! Battle continues...', W/2, H-60);
      let btnW=160, btnH=28, gap=20;
      let btn1X=W/2-btnW-gap/2, btn2X=W/2+gap/2, btnY=H-36;
      let hov1=p.mouseX>=btn1X&&p.mouseX<=btn1X+btnW&&p.mouseY>=btnY&&p.mouseY<=btnY+btnH;
      p.fill(hov1?100:60, hov1?200:160, hov1?100:60, hov1?230:180);
      p.stroke(80,200,80,200); p.strokeWeight(1.5);
      p.rect(btn1X,btnY,btnW,btnH,8);
      p.fill(255,255,255,230); p.noStroke(); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
      p.text((currentLang==='he'?'↺ שחק מחדש':'↺ Play Again'), btn1X+btnW/2, btnY+btnH/2);
      let hov2=p.mouseX>=btn2X&&p.mouseX<=btn2X+btnW&&p.mouseY>=btnY&&p.mouseY<=btnY+btnH;
      p.fill(hov2?80:50, hov2?120:90, hov2?200:160, hov2?230:180);
      p.stroke(80,120,220,200); p.strokeWeight(1.5);
      p.rect(btn2X,btnY,btnW,btnH,8);
      p.fill(255,255,255,230); p.noStroke(); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
      p.text((currentLang==='he'?'☰ תפריט':'☰ Menu'), btn2X+btnW/2, btnY+btnH/2);
    }
  }

  function drawProfile(p){
    p.fill(0,0,0,210); p.noStroke(); p.rect(W/2-320,H/2-230,640,460,22);
    p.stroke(255,200,50,100); p.strokeWeight(2); p.noFill();
    p.rect(W/2-320,H/2-230,640,460,22); p.noStroke();

    if(profileTab==='edit'||!profile){
      // יצירה/עריכה
      p.fill(255,220,80,240); p.textAlign(p.CENTER,p.CENTER); p.textSize(26);
      p.text(profile?'✏️ '+(currentLang==='he'?'עריכת שם':'Edit Name'):'👤 '+(currentLang==='he'?'פרופיל חדש':'New Profile'),W/2,H/2-188);
      p.fill(180,200,255,160); p.textSize(15);
      p.text(currentLang==='he'?'הזן שם:':'Enter name:',W/2,H/2-130);
      // שדה קלט
      p.fill(20,20,30,220); p.stroke(255,220,80,180); p.strokeWeight(2);
      p.rect(W/2-150,H/2-105,300,42,10); p.noStroke();
      p.fill(255,255,255,230); p.textSize(20); p.textAlign(p.CENTER,p.CENTER);
      p.text((profileNameInput||'')+(Math.floor(p.frameCount/30)%2===0?'|':''),W/2,H/2-84);
      // כפתור שמור
      let sh=p.mouseX>=W/2-80&&p.mouseX<=W/2+80&&p.mouseY>=H/2-50&&p.mouseY<=H/2-18;
      p.fill(sh?255:200,sh?210:175,sh?80:60,sh?240:180);
      p.stroke(255,220,80,sh?240:120); p.strokeWeight(2);
      p.rect(W/2-80,H/2-50,160,32,10); p.noStroke();
      p.fill(20,20,10); p.textSize(16); p.textAlign(p.CENTER,p.CENTER);
      p.text(currentLang==='he'?'💾 שמור':'💾 Save',W/2,H/2-34);
      // כפתור ביטול
      if(profile){
        let ch=p.mouseX>=W/2-70&&p.mouseX<=W/2+70&&p.mouseY>=H/2+0&&p.mouseY<=H/2+28;
        p.fill(50,50,70,ch?180:120); p.stroke(140,140,180,100); p.strokeWeight(1);
        p.rect(W/2-70,H/2,140,28,8); p.noStroke();
        p.fill(200,210,230,200); p.textSize(14);
        p.text(currentLang==='he'?'ביטול':'Cancel',W/2,H/2+14);
      }
    } else {
      // תצוגת סטטיסטיקות
      p.fill(255,220,80,240); p.textAlign(p.CENTER,p.CENTER); p.textSize(24);
      p.text('👤 '+(profile.name),W/2,H/2-192);
      // אימייל / כפתור Google
      if(profile.googleUser&&profile.email){
        p.fill(100,220,120,200); p.textSize(11); p.textAlign(p.CENTER,p.CENTER);
        p.text('✅ '+profile.email,W/2,H/2-172);
      } else {
        let gh=p.mouseX>=W/2-100&&p.mouseX<=W/2+100&&p.mouseY>=H/2-182&&p.mouseY<=H/2-160;
        p.fill(gh?255:235,gh?255:235,gh?255:245,gh?220:160);
        p.stroke(180,180,210,120); p.strokeWeight(1); p.rect(W/2-100,H/2-182,200,22,8); p.noStroke();
        p.fill(40,40,60,230); p.textSize(11);
        p.text('🔵 '+(currentLang==='he'?'התחבר עם Google':'Sign in with Google'),W/2,H/2-171);
      }
      const mN=currentLang==='he'
        ?{survival:'⚔️ הישרדות',timeattack:'⏱️ אתגר זמן',king:'👑 מלך הגבעה',potato:'💣 פצצה',tournament:'🏆 טורניר'}
        :{survival:'⚔️ Survival',timeattack:'⏱️ Time Attack',king:'👑 King of Hill',potato:'💣 Hot Potato',tournament:'🏆 Tournament'};
      let sy=H/2-148, rowH=50;
      ['survival','timeattack','king','potato','tournament'].forEach((m,i)=>{
        let st=profile.stats[m]||{wins:0,losses:0};
        let total=st.wins+st.losses, pct=total>0?st.wins/total:0;
        let ry=sy+i*rowH;
        p.fill(255,255,255,i%2===0?6:12); p.noStroke(); p.rect(W/2-265,ry,530,rowH-3,6);
        p.fill(255,220,120,200); p.textSize(14); p.textAlign(p.LEFT,p.CENTER);
        p.text(mN[m],W/2-252,ry+rowH/2-2);
        p.fill(80,255,140,210); p.textSize(14); p.textAlign(p.CENTER,p.CENTER);
        p.text('✓'+st.wins,W/2+40,ry+rowH/2-2);
        p.fill(255,100,100,210);
        p.text('✗'+st.losses,W/2+110,ry+rowH/2-2);
        if(total>0){
          p.fill(60,200,255,180); p.textSize(13);
          p.text(Math.round(pct*100)+'%',W/2+185,ry+rowH/2-2);
          p.fill(20,20,30,160); p.rect(W/2-255,ry+rowH-12,200,7,3);
          p.fill(pct>0.5?80:255,pct>0.5?220:120,pct>0.5?120:80,180);
          p.rect(W/2-255,ry+rowH-12,200*pct,7,3);
        }
      });
      // כפתורים
      let eh=p.mouseX>=W/2-195&&p.mouseX<=W/2-25&&p.mouseY>=H/2+180&&p.mouseY<=H/2+210;
      let ch=p.mouseX>=W/2+25&&p.mouseX<=W/2+195&&p.mouseY>=H/2+180&&p.mouseY<=H/2+210;
      p.fill(eh?60:30,eh?60:30,eh?110:70,eh?200:130);
      p.stroke(140,150,220,eh?200:80); p.strokeWeight(1.5);
      p.rect(W/2-195,H/2+180,170,30,8); p.noStroke();
      p.fill(200,210,255,220); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
      p.text(currentLang==='he'?'✏️ ערוך שם':'✏️ Edit Name',W/2-110,H/2+195);
      if(profile&&profile.googleUser){
        let lh=p.mouseX>=W/2+25&&p.mouseX<=W/2+195&&p.mouseY>=H/2+180&&p.mouseY<=H/2+210;
        p.fill(lh?100:40,lh?40:30,lh?40:30,lh?200:130);
        p.stroke(220,160,100,lh?200:80); p.strokeWeight(1.5);
        p.rect(W/2+25,H/2+180,170,30,8); p.noStroke();
        p.fill(255,200,150,220); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
        p.text(currentLang==='he'?'🔓 התנתק':'🔓 Sign Out',W/2+110,H/2+195);
      } else {
        p.fill(ch?80:30,ch?30:30,ch?30:70,ch?200:130);
        p.stroke(220,140,140,ch?200:80); p.strokeWeight(1.5);
        p.rect(W/2+25,H/2+180,170,30,8); p.noStroke();
        p.fill(255,180,180,220); p.textSize(13); p.textAlign(p.CENTER,p.CENTER);
        p.text(currentLang==='he'?'🚪 סגור':'🚪 Close',W/2+110,H/2+195);
      }
    }
  }

  function drawGameOverScreen(p){
    p.fill(0,0,0,170); p.noStroke(); p.rect(W/2-220,H/2-80,440,160,18);
    p.fill(255,80,80,240); p.textAlign(p.CENTER,p.CENTER); p.textSize(42);
    p.text(T('gameOver'),W/2,H/2-22);
    p.fill(200,200,200,200); p.textSize(18); p.text(T('retryHint'),W/2,H/2+30);
  }
  function drawWinScreen(p){
    p.fill(0,0,0,170); p.noStroke(); p.rect(W/2-240,H/2-80,480,160,18);
    p.fill(255,220,50,240+Math.sin(p.frameCount*0.1)*15); p.textAlign(p.CENTER,p.CENTER); p.textSize(42);
    p.text(T('youWin'),W/2,H/2-22);
    p.fill(200,220,200,200); p.textSize(18); p.text(T('replayHint'),W/2,H/2+30);
    for(let i=0;i<3;i++) addParticles(Math.random()*W,Math.random()*H*0.3,[Math.random()*255,Math.random()*255,80],1);
  }
  function drawBracket(p){
    let rn=T('roundNames');
    let doneRound=rn[tourneyRound-2]||rn[0]; // הסיבוב שהסתיים
    let nextRound=rn[tourneyRound-1]||T('roundLabel'); // הסיבוב הבא
    let winners=lastRoundWinners.length?lastRoundWinners:tourneyWinners;
    let boxH=Math.min(340, 110+winners.length*30);
    // רקע
    p.fill(0,0,0,220); p.noStroke(); p.rect(W/2-320,H/2-boxH/2,640,boxH,18);
    p.stroke(255,200,50,120); p.strokeWeight(2);
    p.noFill(); p.rect(W/2-320,H/2-boxH/2,640,boxH,18);
    // כותרת - מה הסתיים
    p.noStroke();
    p.fill(255,200,50,230); p.textAlign(p.CENTER,p.CENTER); p.textSize(22);
    p.text(T('roundOver')+doneRound,W/2,H/2-boxH/2+30);
    // מה הסיבוב הבא
    p.fill(100,220,255,200); p.textSize(16);
    p.text(T('advancedTo')+nextRound,W/2,H/2-boxH/2+58);
    // קו הפרדה
    p.stroke(255,200,50,60); p.strokeWeight(1);
    p.line(W/2-280, H/2-boxH/2+72, W/2+280, H/2-boxH/2+72);
    p.noStroke();
    // מנצחים
    for(let i=0;i<winners.length;i++){
      let w=winners[i];
      let n=COLORS.botColors.length;
      let col=w.isPlayer?[60,200,255]:COLORS.botColors[((w.colorIdx%n)+n)%n];
      if(w.isPlayer){ p.fill(col[0],col[1],col[2],40); p.rect(W/2-260,H/2-boxH/2+78+i*28,520,26,6); }
      p.fill(col[0],col[1],col[2],220); p.textSize(16);
      p.text((w.isPlayer?'⭐ ':'')+w.name, W/2, H/2-boxH/2+92+i*28);
    }
    // כפתור המשך
    let btnY=H/2+boxH/2-38, btnW=160, btnH=28;
    p.fill(255,200,50,200); p.rect(W/2-btnW/2,btnY,btnW,btnH,8);
    p.fill(0,0,0,220); p.textSize(14);
    p.text(T('anyKey'),W/2,btnY+btnH/2);
  }

  // --- מקלדת ---
  p.keyPressed=function(){
    if(gameState===STATE.PROFILE) return false; // מטופל ב-document listener
    if(gameState===STATE.SPECTATING){
      if(currentMode!==STATE.TOURNAMENT){
        if(p.keyCode===p.RETURN)doStart(currentMode,p);
        if(p.keyCode===32)gameState=STATE.MENU;
      }
      return false;
    }
    if(gameState===STATE.MENU){
      let n=T('modes').length;
      if(p.keyCode===p.UP_ARROW)menuSelection=(menuSelection-1+n)%n;
      if(p.keyCode===p.DOWN_ARROW)menuSelection=(menuSelection+1)%n;
      if(p.keyCode===p.RETURN){
        let mode=MODE_KEYS[menuSelection];
        pendingMode=mode;
        if(BOT_SELECT_MODES.includes(mode)) gameState=STATE.BOT_SELECT;
        else doStart(mode,p);
      }
    } else if(gameState===STATE.BOT_SELECT){
      if(p.keyCode===p.LEFT_ARROW)botCount=Math.max(1,botCount-1);
      if(p.keyCode===p.RIGHT_ARROW)botCount=Math.min(7,botCount+1);
      if(p.keyCode===p.RETURN){
        if(pendingMode===STATE.TIMEATTACK) gameState=STATE.TIME_SELECT;
        else doStart(pendingMode,p);
      }
      if(p.keyCode===32)gameState=STATE.MENU;
    } else if(gameState===STATE.TIME_SELECT){
      let times=[30,60,120,180,300];
      let idx=times.indexOf(timeChoice);
      // ניווט בכפתורים המהירים (רק כשהשדה לא פעיל)
      if(!customTimeActive){
        if(p.keyCode===p.LEFT_ARROW){timeChoice=times[Math.max(0,idx-1)];customTimeInput='';}
        if(p.keyCode===p.RIGHT_ARROW){timeChoice=times[Math.min(times.length-1,idx+1)];customTimeInput='';}
      }
      // מחיקה בשדה
      if(p.keyCode===8&&customTimeActive){ customTimeInput=customTimeInput.slice(0,-1); customTimeError=''; return false; }
      // אישור
      if(p.keyCode===p.RETURN){
        if(customTimeInput.length>0){
          let v=parseInt(customTimeInput);
          if(v>=5&&v<=3600){ timeChoice=v; customTimeInput=''; customTimeActive=false; customTimeError=''; doStart(STATE.TIMEATTACK,p); }
          else { customTimeError=currentLang==='he'?'⚠️ יש להזין מספר בין 5 ל-3600':'⚠️ Enter a number between 5 and 3600'; }
        } else { doStart(STATE.TIMEATTACK,p); }
      }
      if(p.keyCode===32&&!customTimeActive){gameState=STATE.MENU;customTimeInput='';customTimeActive=false;customTimeError='';}
      if(p.keyCode===27){customTimeActive=false;customTimeInput='';}
    } else if(gameState===STATE.GAMEOVER||gameState===STATE.WIN){
      if(p.keyCode===p.RETURN)doStart(currentMode,p); // אנטר = נסה שוב
      if(p.keyCode===32)gameState=STATE.MENU; // רווח = חזור לתפריט
    } else if(gameState===STATE.TOURNEY_BRACKET){
      if(p.keyCode===p.RETURN||p.keyCode===32){ gameState=STATE.TOURNAMENT; matchResolved=false; advanceTourney(p); }
    } else {
      if(p.keyCode===32)gameState=STATE.MENU; // רווח = חזור לתפריט
    }
  };
  // document-level keydown לפרופיל (עובד גם בלי פוקוס canvas)
  document.addEventListener('keydown',function(e){
    if(gameState!==STATE.PROFILE) return;
    if(!profile||profileTab==='edit'){
      if(e.key==='Backspace'){ profileNameInput=profileNameInput.slice(0,-1); e.preventDefault(); }
      else if(e.key==='Enter'&&profileNameInput.trim()){
        let name=profileNameInput.trim();
        if(profile){profile.name=name;}else{profile=defaultProfile(name);}
        saveProfile(profile);profileTab='stats';profileNameInput='';
      } else if(e.key==='Escape'&&profile){ profileTab='stats';profileNameInput=''; }
      else if(e.key.length===1&&profileNameInput.length<16){ profileNameInput+=e.key; e.preventDefault(); }
    } else {
      if(e.key==='Escape'||e.key===' ') gameState=STATE.MENU;
    }
  });

  p.keyTyped=function(){
    if(gameState===STATE.PROFILE) return false; // מטופל ב-document listener
    if(gameState===STATE.TIME_SELECT){
      let ch=p.key;
      if(ch>='0'&&ch<='9'&&customTimeInput.length<4){
        customTimeActive=true;
        customTimeInput+=ch;
        customTimeError='';
      }
      return false;
    }
  };

  p.mousePressed=function(){
    if(gameState===STATE.TOURNEY_BRACKET){
      let bh=lastRoundWinners.length, boxH=Math.min(340,110+bh*30);
      let btnW=160, btnH=28, btnY=H/2+boxH/2-38;
      if(p.mouseY>=btnY&&p.mouseY<=btnY+btnH&&p.mouseX>=W/2-btnW/2&&p.mouseX<=W/2+btnW/2){
        gameState=STATE.TOURNAMENT; matchResolved=false; advanceTourney(p);
      }
      return;
    }
    if(gameState===STATE.SPECTATING){
      let btnW=160, btnH=28, gap=20;
      let btn1X=W/2-btnW-gap/2, btn2X=W/2+gap/2, btnY=H-36;
      if(p.mouseX>=btn1X&&p.mouseX<=btn1X+btnW&&p.mouseY>=btnY&&p.mouseY<=btnY+btnH) doStart(currentMode,p);
      if(p.mouseX>=btn2X&&p.mouseX<=btn2X+btnW&&p.mouseY>=btnY&&p.mouseY<=btnY+btnH) gameState=STATE.MENU;
      return;
    }
    if(gameState===STATE.PROFILE){
      const PW=660,PH=490,PX=W/2-PW/2,PY=H/2-PH/2;
      if(!profile||profileTab==='edit'){
        let avCY=PY+118,avR=54;
        if(p.dist(p.mouseX,p.mouseY,W/2,avCY)<avR||
           (p.mouseX>=W/2-52&&p.mouseX<=W/2+52&&p.mouseY>=avCY+avR+5&&p.mouseY<=avCY+avR+27)){
          if(profile) document.getElementById('avatar-input').click();
        }
        if(p.mouseX>=W/2-72&&p.mouseX<=W/2+72&&p.mouseY>=PY+284&&p.mouseY<=PY+316){
          let name=profileNameInput.trim()||'Player';
          if(profile){profile.name=name;}else{profile=defaultProfile(name);}
          saveProfile(profile);profileTab='stats';profileNameInput='';updateProfileBtn();
        }
        if(profile&&p.mouseX>=W/2-58&&p.mouseX<=W/2+58&&p.mouseY>=PY+326&&p.mouseY<=PY+350){
          profileTab='stats';profileNameInput='';
        }
      } else {
        let avCX=PX+82,avCY=PY+82,avR=52;
        if(p.dist(p.mouseX,p.mouseY,avCX,avCY)<avR) document.getElementById('avatar-input').click();
        // Google login (אם לא מחובר)
        if(!profile.googleUser&&p.mouseX>=W/2-100&&p.mouseX<=W/2+100&&p.mouseY>=H/2-182&&p.mouseY<=H/2-160){
          loginWithGoogle();
        }
        if(p.mouseX>=PX+20&&p.mouseX<=PX+188&&p.mouseY>=PY+PH-48&&p.mouseY<=PY+PH-20){
          profileTab='edit';profileNameInput=profile.name||'';
        }
        // logout (אם מחובר) / סגור (אם לא)
        if(p.mouseX>=PX+PW-188&&p.mouseX<=PX+PW-20&&p.mouseY>=PY+PH-48&&p.mouseY<=PY+PH-20){
          if(profile.googleUser) logoutGoogle(); else gameState=STATE.MENU;
        }
      }
      return;
    }
    if(gameState===STATE.MENU){
      let cW=740,cH=72,sY=130;
      for(let i=0;i<MODE_KEYS.length;i++){
        let y=sY+i*(cH+10);
        if(p.mouseX>W/2-cW/2&&p.mouseX<W/2+cW/2&&p.mouseY>y&&p.mouseY<y+cH){
          let mode=MODE_KEYS[i];
          pendingMode=mode;
          if(BOT_SELECT_MODES.includes(mode)) gameState=STATE.BOT_SELECT;
          else doStart(mode,p);
          break;
        }
      }
    } else if(gameState===STATE.BOT_SELECT){
      let maxBots=7, btnW=58, btnH=58, gap=14;
      let totalW=maxBots*(btnW+gap)-gap;
      let startX=W/2-totalW/2;
      let by=H/2-50;
      for(let i=1;i<=maxBots;i++){
        let bx=startX+(i-1)*(btnW+gap);
        if(p.mouseX>=bx&&p.mouseX<=bx+btnW&&p.mouseY>=by&&p.mouseY<=by+btnH){
          botCount=i;
          if(pendingMode===STATE.TIMEATTACK) gameState=STATE.TIME_SELECT;
          else doStart(pendingMode,p);
          break;
        }
      }
    } else if(gameState===STATE.TIME_SELECT){
      let times=[30,60,120,180,300];
      let btnW=72, btnH=56, gap=12;
      let totalW=times.length*(btnW+gap)-gap;
      let startX=W/2-totalW/2;
      let by=H/2-60;
      let clicked=false;
      for(let i=0;i<times.length;i++){
        let bx=startX+i*(btnW+gap);
        if(p.mouseX>=bx&&p.mouseX<=bx+btnW&&p.mouseY>=by&&p.mouseY<=by+btnH){
          timeChoice=times[i]; customTimeInput=''; customTimeActive=false;
          doStart(STATE.TIMEATTACK,p); clicked=true; break;
        }
      }
      if(!clicked){
        // לחיצה על שדה הקלט
        let inputW=220,inputH=50,inputX=W/2-110,inputY=H/2+28;
        if(p.mouseX>=inputX&&p.mouseX<=inputX+inputW&&p.mouseY>=inputY&&p.mouseY<=inputY+inputH){
          customTimeActive=true;
        } else if(customTimeInput.length>0){
          // לחיצה על כפתור אישור
          let confirmX=W/2+110+10, confirmY=H/2+28;
          if(p.mouseX>=confirmX&&p.mouseX<=confirmX+54&&p.mouseY>=confirmY&&p.mouseY<=confirmY+inputH){
            let v=parseInt(customTimeInput);
            if(v>=5&&v<=3600){timeChoice=v;customTimeInput='';customTimeActive=false;customTimeError='';doStart(STATE.TIMEATTACK,p);}
            else{customTimeError=currentLang==='he'?'⚠️ יש להזין מספר בין 5 ל-3600':'⚠️ Enter a number between 5 and 3600';}
          }
        }
      }
    }
  };

  // ── Touch handlers ──


  function doStart(mode,p){
    currentMode=mode; particles=[]; gameState=mode;
    customTimeInput=''; customTimeActive=false; customTimeError='';
    if(mode===STATE.SURVIVAL)initSurvival(p);
    else if(mode===STATE.TIMEATTACK){gameState=STATE.TIMEATTACK;initTimeAttack(p);}
    else if(mode===STATE.KING)initKing(p);
    else if(mode===STATE.POTATO)initPotato(p);
    else if(mode===STATE.TOURNAMENT){tourneyBracket=[];tourneyRound=1;tourneyMatchIdx=0;tourneyWinners=[];currentRound=[];lastRoundWinners=[];matchResolved=false;fighters=[];powerupBoxes=[];tourneySessionId++;gameState=STATE.TOURNAMENT;initTournament(p);}
    showMessage(T('gameStart'),1500);
  }
});

