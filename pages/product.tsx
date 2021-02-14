import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

import Shell from '@/components/Container';

const ListItem = ({ title, text }) => (
  <div className="flex pt-8">
    <div className="pr-4">
      <div className="bg-blue-200 p-2 rounded">
        <FiCheckCircle className="text-blue-500" size={30} />
      </div>
    </div>
    <div>
      <h5 className="font-bold text-gray-900">{title}</h5>
      <p>{text}</p>
    </div>
  </div>
);

const product = () => {
  return (
    <Shell>
      <div className="text-center w-full md:w-3/5 mx-auto">
        {/* <h3 className="text-blue-500 font-bold">OVERVIEW</h3> */}
        <h1 className="text-4xl pb-2 text-gray-900 font-bold">
          A better way to store your members
        </h1>
        <p>
          Quisp was designed for one reason: to make the sign-in experience easy
          and hassle free. Bar and restaurant employees have enough to worry
          about.
        </p>
      </div>
      <div className="mt-24">
        <div className="grid gap-4 cols-1 lg:grid-cols-2 mt-8">
          <div>
            <h3 className="text-2xl text-gray-900 font-bold">
              Add members hassle free
            </h3>
            <p className="pt-2">
              I remember working in the bar/restaurant industry. Our sign-in
              records were horrendous. Duplicate entries, duplicate numbers,
              ineligibe signature, and the list goes on. Enter Quisp.
            </p>
            <ListItem
              title="No duplicate entries"
              text="The problem with the pen and paper approach is that over time people
                   forgot they signed in or try to cheat the system. Quisp validates newly
                   added members against already existing."
            />
            <ListItem
              title="No Paper"
              text="Remove the stacks of stained paper with hard-to-read signatures and irrelevant or inconssitent data."
            />
            <ListItem
              title="Search members"
              text="I remember the days when customers would come into the bar and wonder what their sign-in number was, or weren’t sure if they were already included in the sign-in. Easily search by the customers name to find out. "
            />
          </div>
          <div className="flex justify-center lg:justify-end">
            {/* <Image
              className="float-right rounded"
              src="/features/teamwork.png"
              height={300}
              width={300}
            /> */}
            <img
              className="rounded-xl"
              style={{ maxHeight: '500px' }}
              src="/features/teamwork.png"
              alt="self image"
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="grid gap-4 cols-1 lg:grid-cols-2 mt-8">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            {/* <Image
              className="float-right rounded"
              src="/features/teamwork.png"
              height={300}
              width={300}
            /> */}
            <img
              className="rounded-xl"
              style={{ maxHeight: '500px' }}
              src="/features/teamwork.png"
              alt="self image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl text-gray-900 font-bold">
              Monitor and manage
            </h3>
            <p className="pt-2">
              I remember working in the bar/restaurant industry. Our sign-in
              records were horrendous. Duplicate entries, duplicate numbers,
              ineligibe signature, and the list goes on. Enter Quisp.
            </p>
            <ListItem
              title="Employee authorization and access"
              text="Set different access for different employees. Want a manager to have admin access and the ability to delete members? Assign them the admin role."
            />
            <ListItem
              title="Always have up-to-date member records"
              text="Duplicate member entries? Delete the extra. Have to remove a member for reasons like death? Simply delete. Keeping your member records up-to-date has never been easier."
            />
            <ListItem
              title="Search members"
              text="I remember the days when customers would come into the bar and wonder what their sign-in number was, or weren’t sure if they were already included in the sign-in. Easily search by the customers name to find out. "
            />
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default product;
