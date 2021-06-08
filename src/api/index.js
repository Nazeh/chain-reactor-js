export const openChannel = async (capacity, durationType, durationValue) => {
  await new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });

  return 'some response';
};
