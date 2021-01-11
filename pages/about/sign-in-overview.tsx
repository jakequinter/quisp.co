import Shell from '../../components/Shell';

const signInOverview = () => {
  return (
    <Shell>
      <div className="max-w-screen-md mx-auto">
        <div className="text-center">
          <h3 className="text-blue-500 font-bold">OVERVIEW</h3>
          <h1 className="text-4xl pb-2 text-gray-900 font-bold">Sign in</h1>
        </div>
        <div className="pt-16">
          <h3 className="text-2xl font-bold text-gray-900 pb-4">
            What's the sign in?
          </h3>
          <p>
            If you’re not from Wisconsin, you probably have no idea what the
            sign-in even is. If you’re unsure of what this process is all about,
            this article will briefly explain. It seems rather confusing, but I
            promise you it’s not. There are multiple variances of how your local
            bar or restaurant may approach their sign-in process, but they
            mostly follow the below steps in some way or another.
          </p>
        </div>
        <div className="pt-8">
          <h3 className="text-lg font-bold text-gray-900 pb-4">The process</h3>
          <ul className="list-disc pl-8">
            <li>
              Customers who want a chance of winning a weekly (most common) or
              monthly drawing “sign-in” to some sort of record keeping system.
              From my observations this is most likely a three-ring binder or at
              least some sort of paper system. Once you are in the “book”,
              you’re eligible to win.{' '}
            </li>
            <div className="rounded-md bg-blue-100 p-4 mt-2">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> I am going to follow the weekly
                    sign-in process for simplicity and for the sake of not
                    specify something like (or monthly) every time I say
                    "weekly". Just note, that the same process could be followed
                    for a monthly sign in.
                  </p>
                </div>
              </div>
            </div>
            <li className="pt-8">
              Customers (now members) can then choose to sign into a separte
              paper system which keeps track of all the members who have signed
              in for the week. This usually costs $1 or $2. You must be signed
              in to the weekly system in order to win the drawing. This means if
              you want a chance to win, you must come into the bar or restaurant
              to sign in each week.{' '}
            </li>
            <li className="pt-8">
              A weekly winner is drawn each week. Bars and restaurants usually
              have a set time they draw each week (i.e., Every wednesday at
              6:00pm). If your number is drawn and you are signed into the book,
              you win. If your number is drawn and you are not signed in to the
              weekly book, too bad, the money just keeps growing for a different
              lucky member to win the following week.{' '}
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <h3 className="text-lg font-bold text-gray-900 pb-4">An example</h3>
          <ul className="list-disc pl-8">
            <li>
              Your local bar has 1,000 people who are in their members book.
              This means 1,000 people are eligibe to win the pot if they sign in
              to the weekly sign in book. Let’s say the weekly sign in cost is
              $1.{' '}
            </li>
            <li className="pt-8">
              Let’s say all 500 people sign in. This means there is $500 in the
              pot (presuming you start at $0). Half of this is usually kept out
              so when someone wins, the pot doesn’t start back at zero. So,
              there’s $250 eligible for someone to win.{' '}
            </li>
            <li className="pt-8">
              If one of the 500 members who did not sign the weekly sign in book
              gets drawn for this particular week, the $250 is saved for the
              following week and the process starts over. If those same 500
              people sign in the next week, there will be $500 in possible
              winnings ($250 + $250). If, however, one of the 500 members is
              drawn who did sign in to the weekly book, then they win.{' '}
            </li>
          </ul>
        </div>
        <div className="pt-16">
          <h3 className="text-2xl font-bold text-gray-900 pb-4">
            The problem with the paper system
          </h3>
          <p>
            Working for a business that provided its customers with the option
            to join a sign in, I noticed many complications to this process. I’m
            sure there are others, but this is just what I experienced in my
            3-4ish years working in the bar and restaurant industry.
          </p>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-900 pb-4">
              Inconsistent data
            </h3>
            <p>
              The local business I worked for started their sign in back in
              2006. If you flipped through their three-ring binder back to the
              year 2006, you would find the initially required 2 pieces of
              information. First, your sign-in number, which starts at 1, and
              increments accordingly. The next person would be 2, then 3, then
              4, and so on. Secondly, they required your signature. Fast forward
              to 2009, and they started to realize they wouold like to add the
              date they joined, so that became mandatory. Somewhere around 2011,
              they started noticing that some members signatures were
              ineligible. This becomes a problem after drawing a number and not
              being able to tell if that person signed in or even what their
              name is. Imagine getting drawn for $2,000+ dollars and not being
              able to collect it becasue nobody knows who you are. Not fun.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-900 pb-4">
              Duplicate entries
            </h3>
            <p>
              Whether intentional or not, having your name inside the members
              book multiple times is a great advantage. I don’t need to do the
              math for you, but if you’re in a drawing with 1,000 other people,
              and you’re in there 2, 3, 4 times, your odds are definitely
              greater. With employees leaving and new employees coming, it would
              be an impossible task to search through possibly thousands of
              members to see if they are already in the book or not.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-900 pb-4">
              Inability to easily update or delete members
            </h3>
            <p className="pb-4">
              What happens if someone in the member book gets married and
              doesn’t go by their maiden name anymore? You can’t expect the
              bartender to know everybody’s name, let alone their previous name.
              Not to mention the time consuming process it would be to search
              through your records, scriblle their last name out, and write in
              their new last name. It’s tedious and most often not done.
            </p>
            <p>
              Next, what happens when a member is in the book 2, 3, or even 4
              different times? Do we just cross out their extra entries and
              leave it? Do we assign the now unused numbers to newcomers? Who
              knows, but it’s better to just not have to worry about it.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-bold text-gray-900 pb-4">
              Trying to find what you're looking for is almost impossible
            </h3>
            <p className="pb-4">
              It seemed like a rare coincidence at first when a member would ask
              me, “What’s my sign in number anyways?”. Umm, well let me sift
              through dozens of pages to try and find your ineligible signature.
              What’s your name again? Any idea what year you signed in to narrow
              it down for me?
            </p>
            <p>
              The local business I worked at had roughly 1,000 members in their
              sign in book. I’m guessing now, but it was probably 35-50 pages
              (front and back) filled with members. And they didn’t start their
              sign in until 2006. I know of bars with 10,000 or even as high as
              30,000 members in their book. Imagine searching through this to
              try and pinpoint a member.{' '}
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default signInOverview;
