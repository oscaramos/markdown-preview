import { loader as loaderDefaultOptions } from "config";
import LoaderErrorBoundaryFallback from "errorHandling/Fallbacks/Loader";

import Loading from "components/Loading";

import _asyncComponentLoader from "./loader";

const asyncComponentLoader = (
  loadComponent,
  loaderOptions = loaderDefaultOptions,
  FallbackWaiting = Loading,
  FallbackFail = LoaderErrorBoundaryFallback
) =>
  _asyncComponentLoader(
    loadComponent,
    loaderOptions,
    FallbackWaiting,
    FallbackFail
  );

export default asyncComponentLoader;
