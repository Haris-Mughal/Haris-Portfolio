import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const DownloadCVButton = ({isSmall}: {isSmall?: boolean}) => {

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <a
      href="/harisDeveloperCV.pdf"
      download="harisDeveloperCV.pdf"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      Download CV
    </a>
  ) : (
    <a
      href="/harisDeveloperCV.pdf"
      download="harisDeveloperCV.pdf"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      Download CV
    </a>
  );
};
