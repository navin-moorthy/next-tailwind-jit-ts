import * as React from "react";

import { Badge, BadgeProps } from "@renderlesskit/react-tailwind";

export type BadgeStackProps = BadgeProps & {};

export const BadgeStack: React.FC<BadgeStackProps> = (props) => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col space-y-1'>
        <div className='space-x-2'>
          <Badge {...props} size='sm' variant='solid' themeColor='default'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='subtle' themeColor='default'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='outline' themeColor='default'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='sm' variant='solid' themeColor='primary'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='subtle' themeColor='primary'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='outline' themeColor='primary'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='sm' variant='solid' themeColor='secondary'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='subtle' themeColor='secondary'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='outline' themeColor='secondary'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='sm' variant='solid' themeColor='success'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='subtle' themeColor='success'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='outline' themeColor='success'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='sm' variant='solid' themeColor='danger'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='subtle' themeColor='danger'>
            Alpha
          </Badge>
          <Badge {...props} size='sm' variant='outline' themeColor='danger'>
            Alpha
          </Badge>
        </div>
      </div>
      <div className='flex flex-col space-y-1'>
        <div className='space-x-2'>
          <Badge {...props} size='md' variant='solid' themeColor='default'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='subtle' themeColor='default'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='outline' themeColor='default'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='md' variant='solid' themeColor='primary'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='subtle' themeColor='primary'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='outline' themeColor='primary'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='md' variant='solid' themeColor='secondary'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='subtle' themeColor='secondary'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='outline' themeColor='secondary'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='md' variant='solid' themeColor='success'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='subtle' themeColor='success'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='outline' themeColor='success'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='md' variant='solid' themeColor='danger'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='subtle' themeColor='danger'>
            Alpha
          </Badge>
          <Badge {...props} size='md' variant='outline' themeColor='danger'>
            Alpha
          </Badge>
        </div>
      </div>
      <div className='flex flex-col space-y-1'>
        <div className='space-x-2'>
          <Badge {...props} size='lg' variant='solid' themeColor='default'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='subtle' themeColor='default'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='outline' themeColor='default'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='lg' variant='solid' themeColor='primary'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='subtle' themeColor='primary'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='outline' themeColor='primary'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='lg' variant='solid' themeColor='secondary'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='subtle' themeColor='secondary'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='outline' themeColor='secondary'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='lg' variant='solid' themeColor='success'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='subtle' themeColor='success'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='outline' themeColor='success'>
            Alpha
          </Badge>
        </div>
        <div className='space-x-2'>
          <Badge {...props} size='lg' variant='solid' themeColor='danger'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='subtle' themeColor='danger'>
            Alpha
          </Badge>
          <Badge {...props} size='lg' variant='outline' themeColor='danger'>
            Alpha
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default BadgeStack;
