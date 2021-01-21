const newQuestionText = document.getElementById ("question")
const questions = ['Most likely to cry over a boy/girl?', 'Most likely to have a candy bar in their pocket?', 'Most likely to eat breakfast without brushing?', 'Most likely to finish their meal first?', 'Most likely to get grounded?', 'Most likely to bite their fingernails?', 'Most likely to hide a stray cat?', 'Most likely to hide a stray dog?', 'Most likely to hide an alien under their bed?', 'Most likely to talk while chewing?', 'Most likely to tell a lie to get out of trouble?', 'Most likely to throw a tantrum?', 'Most likely to always tell the truth?', 'Most likely to play video games all day?', 'Most likely to spend the entire day in bed?', 'Most likely to cry during an argument?', 'Most likely to teach their pet a new trick?', 'Most likely to get in trouble in school?', 'Most likely to open up and fix their broken toy?', 'Most likely to hog their toys?', 'Most likely to write a letter to their grandparents?', 'Most likely to keep a reptile as a pet?', 'Most likely to host a sleepover?', 'Most likely to make scrapbooks?', 'Most likely to put on a puppet show?', 'Most likely to have the best Kool-Aid painting?', 'Most likely to build a giant fort out of blankets and chairs?', 'Most likely to win a scavenger hunt?', 'Most likely to be a villain in a movie?', 'Most likely to spend the entire day watching Animal Planet?', 'Most likely to bake and sell cookies?', 'Most likely to make a photo journal?', 'Most likely to collect seashells?', 'Most likely to make a fort out of cardboard boxes?', 'Most likely to paint their sneakers?', 'Most likely to make a beautiful drawing?', 'Most likely to take a sewing or knitting class?', 'Most likely to catch the most fireflies in a jar?', 'Most likely to start a water balloon fight?', 'Most likely to collect and paint rocks?', 'Most likely to make the coolest paper boats?', 'Most likely to string beads into jewelry?', 'Most likely to set up a lemonade stand?', 'Most likely to go fruit picking?', 'Most likely to make a friendship bracelet?', 'Most likely to be the best at juggling?', 'Most likely to become a Disney star?', 'Most likely to be a gymnast?', 'Most likely to keep a stash of comic books?', 'Most likely to meet the President?', 'Most likely to attend a pop star’s concert?', 'Most likely to be part of a cool band?', 'Most likely to win a Lego Building Contest?', 'Most likely to win a Math Competition?', 'Most likely to win a Writing Contest?', 'Most likely to win an Art Contest?', 'Most likely to get lost in Disneyland?', 'Most likely to volunteer at a nature center?', 'Most likely to start a YouTube channel?', 'Most likely to be a police officer?', 'Most likely to forget a loved one’s birthday?', 'Most likely to forget an important event?', 'Most likely to forget people’s names?', 'Most likely to forget their spouse’s birthday?', 'Most likely to forget their wallet/purse at a shop?', 'Most likely to forget their wedding anniversary?', 'Most likely to forget to shower?', 'Most likely to forget to wear makeup?', 'Most likely to forget what they told someone?', 'Most likely to forget where they parked their car?', 'Most likely to get punched in the face?', 'Most likely to get robbed?', 'Most likely to get shouted at by their parents?', 'Most likely to get stranded on vacation?', 'Most likely to get struck by lightning?', 'Most likely to get stuck in a bathroom stall or on an elevator?', 'Most likely to get stuck in a swing?', 'Most likely to get the teacher off-topic?', 'Most likely to get the whole gang in trouble?', 'Most likely to get their car keyed?', 'Most likely to go back to teach at their high school?', 'Most likely to go bankrupt?', 'Most likely to go bungee jumping?', 'Most likely to go fishing?', 'Most likely to go surfing?', 'Most likely to go grocery shopping for one thing, and come back with everything else than the one thing?', 'Most likely to go hiking with strangers?', 'Most likely to go on a blind date arranged by their mum?', 'Most likely to go to jail for doing something stupid?', 'Most likely to own a bar?', 'Most likely to own a cruise ship?', 'Most likely to own a gun?', 'Most likely to own a Lamborghini?', 'Most likely to own a power bike?', 'Most likely to own a small business?', 'Most likely to own a truck?', 'Most likely to own a weird pet?', 'Most likely to own a yacht?', 'Most likely to own a zoo?', 'Most likely to own an electric car?', 'Most likely to own the most pets?', 'Most likely to own a bar?', 'Most likely to own a beauty salon?', 'Most likely to own an illegal business?', 'Most likely to own a beach house?', 'Most likely to fall asleep during a movie?', 'Most likely to fall asleep in class?', 'Most likely to fall asleep in the cinema?', 'Most likely to fall down the stairs?', 'Most likely to fall in a shark tank?', 'Most likely to fall in love with a werewolf?', 'Most likely to fall in love with the wrong person?', 'Most likely to fall in the shower?', 'Most likely to fall off a chair?', 'Most likely to fall off a tree?', 'Most likely to fall off the stage at a televised event?', 'Most likely to fall off the stairs while holding a cake?', 'Most likely to be a terrible detective?', 'Most likely to be a terrible photographer?', 'Most likely to be a terrible secretary of defense?', 'Most likely to be a terrible secretary of state?', 'Most likely to be a terrible UN ambassador?', 'Most likely to be a terrible vice president?', 'Most likely to be a horrible actor/actress?', 'Most likely to be a horrible boss?', 'Most likely to be a horrible president?', 'Most likely to be a bad actor?', 'Most likely to be a bad cop?', 'Most likely to be a lousy taxi driver?', 'Most likely to be a horrible boss?', 'Most likely to be afraid of watching horror movies?', 'Most likely to be afraid to share their opinions in a conversation?', 'Most likely to be allergic to cats/ dogs?', 'Most likely to be an Alien?', 'Most likely to be the Grinch on Christmas?', 'Most likely to be the teacher’s pet?', 'Most likely to eat cat food?', 'Most likely to eat dog food?', 'Most likely to eat something alive?', 'Most likely to eat spaghetti with syrup?', 'Most likely to eat the highest number of burgers within 10 minutes?', 'Most likely to eat their birthday cake alone?', 'Most likely to eat weird food?', 'Most likely to embarrass themselves in public?', 'Most likely to end the world?', 'Most likely to end up alone?', 'Most likely to end up in prison?', 'Most likely to end up on Broadway?', 'Most likely to end world hunger?', 'Most likely to fail a driving test?', 'Most likely to fail a math test?', 'Most likely to fail a simple test?', 'Most likely to faint if they met their favorite celebrity?', 'Most likely to fake their death?', 'Most likely to become a baby again?', 'Most likely to become a bestselling author?', 'Most likely to become a billionaire?', 'Most likely to become a Bollywood star?', 'Most likely to become a celebrity?', 'Most likely to become a chess master?', 'Most likely to become a comedian?', 'Most likely to become a divorcee?', 'Most likely to become a doctor?', 'Most likely to become a famous actor/actress?', 'Most likely to become a famous artist?', 'Most likely to become a farmer?', 'Most likely to become a firefighter?', 'Most likely to become a freeloader?', 'Most likely to become a gambler?', 'Most likely to become a high school teacher?', 'Most likely to become a magician?', 'Most likely to become a millionaire?', 'Most likely to become a motivational speaker?', 'Most likely to become a pilot?', 'Most likely to become a poet?', 'Most likely to become a police officer?', 'Most likely to become a politician?', 'Most likely to become a pop star?', 'Most likely to become a famous singer?', 'Most likely to become a professional athlete?', 'Most likely to become a professional gambler?', 'Most likely to become a public figure?', 'Most likely to become a rock star?', 'Most likely to become a successful politician?', 'Most likely to become a supervillain?', 'Most likely to become a superhero?', 'Most likely to stay up late playing video games?']

function getQuestion(){
    newQuestionText.innerHTML = questions[Math.floor(Math.random() * questions.length)];
}