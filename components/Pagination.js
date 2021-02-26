import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Pagination = ({
  membersPerPage,
  totalPosts,
  next,
  previous,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 0; i < totalPosts / membersPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center">
      <button
        className="bg-white p-1 mr-2 rounded-lg text-chakra500"
        onClick={previous}
        disabled={currentPage + 1 === 1}
      >
        <FiChevronLeft size={14} />
      </button>
      <span className="font-medium text-indigo-500">{currentPage + 1}</span>
      <button
        className="bg-white p-1 ml-2 rounded-lg text-chakra500 hover:bg-chakra50"
        onClick={next}
        disabled={currentPage + 1 === pageNumbers.length}
      >
        <FiChevronRight size={14} />
      </button>
    </div>
  );
};

export default Pagination;
