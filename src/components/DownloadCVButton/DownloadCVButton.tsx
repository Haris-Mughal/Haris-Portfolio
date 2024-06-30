// import {useDownloadPdf} from 'hooks/useDownloadPdf';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const DownloadCVButton = ({isSmall}: {isSmall?: boolean}) => {
  // const [, handleDownload] = useDownloadPdf(import.meta.env.VITE_CV_PATH, 'Haris-Developer-CV.pdf');

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <a
      href="/cv.pdf"
      download="Haris-Developer-CV.pdf"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit' : ''}  btn`}
      target="_blank"
    >
      Download CV
    </a>
  ) : (
    <a
      href="/cv.pdf"
      download="Haris-Developer-CV.pdf"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
      target="_blank"
    >
      Download CV
    </a>
  );
};
