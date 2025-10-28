import { Image } from '../../ui/image';
import { brandInfo } from '@/data/brand';

export function BrandSection() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Image
          src={brandInfo.logo}
          alt={`${brandInfo.name} Logo`}
          width={40}
          height={40}
          className="object-contain"
          context="logo"
        />
        <span className="text-white">{brandInfo.name}</span>
      </div>
      <p className="text-sm text-gray-400">
        {brandInfo.description}
      </p>
    </div>
  );
}
