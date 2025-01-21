const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {text1}
        <span className="ml-2 sm:ml-3 md:ml-3 lg:ml-4 text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
