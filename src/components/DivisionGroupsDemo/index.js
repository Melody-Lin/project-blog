'use client';
import dynamic from 'next/dynamic';

export const DivisionGroupsDemo = dynamic(() =>
  import('./DivisionGroupsDemo'),
);

export default DivisionGroupsDemo;
