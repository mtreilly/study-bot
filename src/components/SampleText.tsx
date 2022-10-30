export default function SampleText() {
  return (
    <div>
      In this chapter we look at the basics of information theory. This is a
      relatively new field of study, introduced to the world in 1948 in a
      groundbreaking paper, which laid the foundation for technologies from
      modern com- puters and satellites to cell phones and the internet (Shannon
      1948). The goal of the original theory was to find the most efficient way
      to communicate a message electronically. But the ideas of that theory are
      deep, broad, and profound. They give us tools for measuring how much we
      know about anything by converting it to a digital form that we can study
      and manipulate. Terms and ideas from information theory form part of the
      bedrock of deep learning. For example, the measurements provided by
      information theory are useful when we evaluate the performance of deep
      networks. In this chapter, we take a fast tour through some of the basics
      of information theory, while staying free of abstract mathematical
      notation.Let’s begin with the word information, one of those words that
      has both an everyday meaning and a specialized, scientific meaning. In
      this case, the meanings share a lot conceptual overlap, but while the
      popular meaning is broad and open to personal interpretation, the
      scientific meaning is precise and defined mathematically. Let’s start out
      by building up to the scientific definition of information, and ultimately
      work our way up to an important measurement that lets us compare two
      probability distributions. Surprise and Context When we receive a
      communication of any kind, something moved from one place to another,
      whether it was an electrical pulse, some photons of light, or the sound of
      someone’s voice. Speaking broadly, we could say that a sender somehow
      transfers some kind of communication to a receiver. Let’s introduce some
      more specialized vocabulary. Understanding Surprise In this chapter, we
      sometimes use the term surprise to represent how unex- pected a sender’s
      communication is to a receiver. Surprise isn’t a formal term. In fact, one
      of our goals in this chapter is to find more formal names for surprise and
      attach specific meanings and measures to them. Let’s suppose that we’re on
      the receiving end of a message. We want to describe how surprised we are
      by the communication we receive. Being able to do so is useful because, as
      we’ll see, the greater the surprise, the greater the amount of information
      that was delivered. Suppose we get an unexpected text message from an
      unknown number. We open it up and the first word is Thanks. How surprised
      are we? Surely we are at least a little surprised, because so far, we
      don’t know who the message is from or what it’s about. But receiving a
      text thanking us for something does happen, so it’s not unheard of. Let’s
      make up an imaginary and completely subjective surprise scale, where 0
      means something is completely expected, and 100 means it’s a total
      surprise, as in Figure 6-1. 0 Completely Expected 100 A Total Surprise 134
      Chapter 6 Figure 6-1: The surprise scale, expressed as a value from 0 to
      100 On this scale, the word Thanks at the start of an unexpected text mes-
      sage might rank a 20. Now suppose that the first word in our message isn’t
      Thanks, but instead is Hippopotamus. Unless we’re working with those
      animals or are otherwise involved with them, that’s likely to be a rather
      surprising first word of a message. Let’s rank this word at an 80 on the
      surprise scale, as in Figure 6-2. 0 100 “Thanks” “Hippopotamus” Figure
      6-2: Placing messages on our surprise scale Although hippopotamus might be
      a big surprise at the start of a message, it might not be surprising later
      on. The difference is context. Unpacking Context For our purposes, we can
      think of context as the environment of the mes- sage. Since we’re focusing
      on the meaning of each message, rather than the physical way it’s
      communicated, the context represents the shared knowl- edge between the
      sender and receiver, which gives the message meaning. When the message is
      a piece of language, this shared knowledge must include the words used,
      since a message of Kxnfq rnggw would carry no meaning. We can extend that
      shared knowledge to include grammar, cur- rent interpretations of
      emoticons and abbreviations, shared cultural influ- ences, and so on. This
      is all called global context. It’s the general knowledge that we bring to
      any message, even before we’ve read it. In terms of our Bayes’ Rule
      discussion of Chapter 4, some of this global context is captured in our
      prior, since that is how we represent our understanding of the envi-
      ronment and what we expect to learn from it. In contrast to the global
      context, there is also local context. That’s the environment composed of
      the elements of the message itself. In a text message, the local context
      for any given word is the other words in that message. Let’s imagine that
      we’re reading a message for the first time, so each word’s local context
      is made up only of the words that preceded it. We can use the context to
      get a handle on surprise. If Hippopotamus is the first word of our
      message, then there is no local context yet, only the global. And if we
      don’t work with hippopotamuses on a regular basis, that word is likely
      very surprising. But if the message begins with, Let’s go down to the
      river area at the zoo and maybe see a big gray, then in that context, the
      word hippopotamus isn’t very surprising. We can describe the amount of
      surprise carried by a specific word in our global context by assigning it
      a surprise value, as we did in Figure 6-1. Suppose that we assign a
      surprise value to every word in the dictionary (a tedious job, but
      certainly possible). If we scale these numbers so that they all add up to
      1, we’ve created a probability mass function (or pmf), as we discussed in
      Chapter 2. That means we can draw a random variable from that pmf to get a
      word, with the most surprising words coming along more frequently than the
      less surprising words. A more common approach is to Information Theory 135
      136 Chapter 6 set up the pmf to represent how common a word is, which is
      roughly the opposite of surprise. With that setup, we’d expect to draw the
      least surpris- ing, or more common, words more frequently than uncommon
      words. We’ll use this idea later in the chapter to devise a scheme for
      transmit- ting the content of a message in an efficient manner. Measuring
      Information In this chapter, we’re going to talk quite a lot about bits.
      In popular lan- guage, a bit is usually thought of as a little package of
      data, often labeled either 0 or 1. For instance, when we talk about
      internet speed in “bits per second,” we might picture the bits as leaves
      flowing down a river, and we count them as they go by. This is a
      convenient idea, but in technical language, a bit is not a thing, like a
      leaf, but a unit, like a gallon or a gram. That is, it isn’t a piece of
      stuff but a way to talk about how much stuff we have. A bit is a container
      that holds just enough storage for what we currently think is the
      fundamental, indivisible, smallest possible chunk of information. Speaking
      of bits as units in this way is technically correct, but it’s incon-
      venient. And most of the time, we can speak casually without any confu-
      sion, like when we say, “My net connection is 8,000 bits per second,”
      rather than, “My net connection is able to transmit 8,000 bits worth of
      information per second.” We’ll use the more casual language in most of
      this book, but it’s worthwhile to know the technical definition, because
      it does pop up from time to time in papers and documentation where the
      distinction is important. We can measure the amount of information in a
      text message with a formula that tells us how many bits are needed to
      represent that message. We won’t get into the math, but we’ll describe
      what’s going on. The for- mula takes two inputs. The first is the text of
      the message. The second is a pmf that describes the surprise inherent in
      each word the message can contain (let’s just call this a probability
      distribution for the rest of this chap- ter). When we take the text of the
      message and the probability distribution together, we can produce a number
      that tells us how many bits of informa- tion the message carries. The
      formula was designed so that the values it produces for each word (or,
      more generally, each event) have four key properties. We’ll illustrate
      each one using a context in which we work in an office, and not on a
      river. 1. Likely events have low information. Stapler has low information.
      2. Unlikely events have high information. Crocodile has high information.
      3. Likely events have less information than unlikely events. Stapler
      conveys less information than crocodile. 4. Finally, the total information
      due to two unrelated events is the sum of their individual information
      values found separately. The first three properties relate single objects
      to their information. The oddball in the group is property 4, so let’s
      look at it more carefully. In normal conversation, it’s rare for two
      consecutive words to be com- pletely unrelated. But suppose someone asked
      us for a “kumquat daffodil.” Those words are just about completely
      unrelated, so property 4 says that we could find the information in that
      phrase by adding the information com- municated by each word
      independently. In normal conversation, the words that lead up to any given
      word often narrow the possibilities of what it could be. If someone says,
      “Today I ate a big,” then words like “sandwich” and “pizza” arriving next
      carry less sur- prise than “bathtub” or “sailboat.” When words are
      expected, they produce less surprise than when they’re not. By contrast,
      suppose we’re sending a device’s serial number, which is essentially an
      arbitrary sequence of letters and perhaps numbers, like “C02NV91EFY14.” If
      the characters really have no relation to each other, then adding the
      surprise due to each character gives us the overall surprise in the entire
      message representing the serial number. By combining the surprise of two
      unrelated words into the sum of their individual surprise values, we go
      from measuring the surprise, or information, in each of those words to the
      surprise in their combination. We can keep combining words this way into
      ever-larger groups until we’ve considered the entire message. Though we
      haven’t gone into the math, we have reached a formal definition of
      information: it’s a number produced from a formula that uses one or more
      events (such as words), and a prob- ability distribution to describe how
      surprising each event would be to us. From those two inputs the algorithm
      provides a number for each event, and guarantees that those numbers
      satisfy the four properties we just listed. We call each word’s number its
      entropy, telling us how many bits are needed to communicate it. Adaptive
      Codes The amount of information carried by each event is influenced by the
      size of the probability function we hand to our formula. In other words,
      the number of possible words we might communicate affects the amount of
      information carried by each word we send. Suppose we want to transmit the
      contents of a book from one place to another. We might list all the unique
      words in that book and then assign a number to each word, starting perhaps
      with 0 for the, then 1 for and, and so on. Then, if our recipient also has
      a copy of that word list, we can send the book just by sending the number
      for each word, starting with the first word in the book. The Dr. Seuss
      book Green Eggs and Ham contains only 50 differ- ent words (Seuss 1960).
      To represent a number between 0 and 49, we need six bits of information
      per word. By contrast, Robert Louis Stevenson’s book Treasure Island
      contains about 10,700 unique words (Stevenson 1883). We’d have to use 14
      bits per word to uniquely identify each word in that book. Information
      Theory 137 Although we could use one giant word list of all English words
      to send these books, it’s more efficient to tailor our list to each book’s
      individual vocabulary, including only the words we actually need. In other
      words, we can improve our efficiency by adapting our transmission of
      information to what’s being communicated. Let’s take that idea and run
      with it. Suppose we have a book that contains a lot of repetition. For
      example, it might have a character who says, “Don’t be alarmed! I’m not
      going to hurt you,” every couple of pages. In that case, we might decide
      that rather than send the full text of the message each time it appears,
      we’ll just send a code that represents that message. We could create a new
      word list that includes all the unique messages in the book, starting with
      the first message. Then we could send the code for each message, rather
      than the message itself, whenever it appears.
    </div>
  );
}
