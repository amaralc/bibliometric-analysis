import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { useEffect, useState } from 'react';
import { Icon as TablerIcon, Photo, Upload, X } from 'tabler-icons-react';
import { getDOIByQuery } from '~/requests/getDOIByTitleAndYearRequest';
// import { parseCsv } from '~/utils/parsers/csv';
import { parseBibTex } from '../utils/parsers/bibtex';

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
  <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
    <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);

/**
 * @see https://stackoverflow.com/questions/19280901/javascript-upload-and-parse-file-on-fly
 */

const parseFiles = (files) => {
  var myFile = files[0];
  var reader = new FileReader();

  reader.addEventListener('load', function (e) {
    let plainTextContent = e.target?.result;
    parseBibTex(plainTextContent);
    // parseCsv(plainTextContent);
  });

  reader.readAsBinaryString(myFile);
};

export default function Demo() {
  const theme = useMantineTheme();
  const [references, setReferences] = useState([]);

  useEffect(() => {
    const query = `Additive%20manufacturing:%20scientific%20and%20technological%20challenges,%20market%20uptake%20and%20opportunities`;
    const email = `unpaywall_01@example.com`;
    getDOIByQuery(query, email, setReferences, references);
  }, []);

  console.log(references);

  return (
    <Dropzone
      onDrop={parseFiles} //(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={['text/csv', 'text/plain', 'text/x-bibtex']}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}
