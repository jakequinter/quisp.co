import { getAllMembers, getSingleMember } from '@/lib/db-admin';

export async function getStaticProps(context) {
  const memberId = context.params.memberId;
  const member = await getSingleMember(memberId);

  return {
    props: {
      initialMember: member
    }
  };
}

export async function getStaticPaths() {
  const members = await getAllMembers();
  const paths = members.map(member => ({
    params: {
      memberId: member.id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
}

const Member = ({ initialMember }) => {
  console.log(initialMember);
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-chakra400 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <form>
            <h3
              className="text-xl font-medium text-chakra700 text-center"
              id="modal-headline"
            >
              Edit
            </h3>
            <div className="my-10">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-chakra700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm  focus:border-green-500 block w-full sm:text-sm border-chakra300 rounded-md"
                    // ref={register({
                    //   required: 'Required'
                    // })}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-chakra700"
                >
                  Sign in number
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-blue-500 block w-full sm:text-sm border-chakra300 rounded-md"
                    // ref={register({
                    //   required: 'Required'
                    // })}
                  />
                </div>
              </div>
            </div>
            <div className=" flex mt-5 sm:mt-6">
              <button
                type="submit"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm mx-2 px-4 py-2 bg-indigo-300 text-indigo-900 font-medium hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Update member
              </button>
              <button
                // onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm mx-2 px-4 py-2 bg-chakra200 text-base font-medium text-chakra-900 hover:bg-chakra300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Member;