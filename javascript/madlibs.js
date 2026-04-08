function makeMadLib(){   

    const adjectives = [
    prompt("Enter an adjective:"),
    prompt("Enter another adjective:"),
    prompt("Enter another adjective:"),
    prompt("Enter another adjective:"),
    prompt("Enter another adjective:"),
    prompt("Enter another adjective:")
    ]

    const animals = [
        prompt("Enter an animal:"),
        prompt("Enter another animal:"),
        prompt("Enter another animal:"),
        prompt("Enter another animal:"),
        prompt("Enter another animal:")
    ]

        const verbs = [
        prompt("Enter an verb:"),
        prompt("Enter another verb:"),
        prompt("Enter another verb:"),
        prompt("Enter another verb:"),
        prompt("Enter another verb:"),
        prompt("Enter another verb:")

    ]

        const adverbs = [
        prompt("Enter an adverb:"),
        prompt("Enter another adverb:"),
        prompt("Enter another adverb:"),
        prompt("Enter another adverb:"),
        prompt("Enter another adverb:")
    ]

        const nouns = [
        prompt("Enter an noun:"),
        prompt("Enter another noun:"),
        prompt("Enter another noun:"),
        prompt("Enter another noun:"),
        prompt("Enter another noun:"),
        
    ]

        const bodyParts = [
        prompt("Enter an body part:"),
        prompt("Enter another body part:"),
        prompt("Enter another body part:"),
        prompt("Enter another body part:"),
        prompt("Enter another body part:"),

    ]

const story = 
`The ${adjectives[0]} day began with a strange feeling in the air.
A ${animals[0]} appeared outside the window.
It started to ${verbs[0]} without warning.
Everything moved ${adverbs[0]} as the moment unfolded.
A nearby ${nouns[0]} began to shake slightly.
I felt it in my ${bodyParts[0]} immediately.
The scene turned ${adjectives[1]} in an instant.
Another ${animals[1]} joined from the distance.
They both decided to ${verbs[1]} together.
The ground shifted ${adverbs[1]} beneath them.

A ${nouns[1]} rolled across the space unexpectedly.
I raised my ${bodyParts[1]} to block the view.
Everything seemed ${adjectives[2]} and confusing.
One ${animals[2]} suddenly chose to ${verbs[2]}.
The other followed ${adverbs[2]} behind it.
A loud ${nouns[2]} echoed through everything.
I could feel it in my ${bodyParts[2]} again.
The moment became even more ${adjectives[3]}.
Another ${animals[3]} appeared from nowhere.
It began to ${verbs[3]} in circles.

Everything changed ${adverbs[3]} after that.
A strange ${nouns[3]} fell from above.
I covered my ${bodyParts[3]} quickly.
The entire situation felt ${adjectives[4]}.
One ${animals[4]} tried to ${verbs[4]} again.
It moved ${adverbs[4]} toward the others.
A final ${nouns[4]} settled everything down.
I lowered my ${bodyParts[4]} slowly.
The world became ${adjectives[5]} once more.
In the end, everything chose to ${verbs[5]}.`;

    document.getElementById("result").textContent = story;
}

function story2(){   

    const words = {
        adjective: prompt("Enter an adjective:"),
        animal: prompt("Enter an animal:"),
        noun: prompt("Enter an noun:"),
        verb: prompt("Enter an verb:"),
        adverb: prompt("Enter an adverb:"),
        bodyPart: prompt("Enter an body part:")
    }

const story = 
`The ${words.adjective} day began with a strange feeling in the air.
A ${words.animal} appeared outside the window.
It started to ${words.verb} without warning.
Everything moved ${words.adverb} as the moment unfolded.
A nearby ${words.noun} began to shake slightly.
The sky turned ${words.adjective} as clouds gathered.
Another ${words.animal} joined from the distance.
They began to ${words.verb} together in unison.
Everything shifted ${words.adverb} around them.
A ${words.noun} rolled across the ground.
The air felt ${words.adjective} and tense.
One ${words.animal} suddenly chose to ${words.verb}.
The other followed ${words.adverb} behind it.
A loud ${words.noun} echoed through everything.
I felt it in my ${words.bodyPart}.
The moment became more ${words.adjective}.
Another ${words.animal} appeared from nowhere.
It started to ${words.verb} wildly.
Everything changed ${words.adverb} after that.
The final ${words.noun} settled the scene.`;

    document.getElementById("result").textContent = story;
}

