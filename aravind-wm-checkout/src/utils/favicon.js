import Logo from '../assets/images/logo.png';

export const setFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = Logo;
  document.getElementsByTagName('head')[0].appendChild(link);
}