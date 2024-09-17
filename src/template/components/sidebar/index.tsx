import * as C from './styles';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex
} from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { AiOutlineControl } from "react-icons/ai";
import ImageProfile from '../../../../public/assets/images/profile.svg';

export const SideBarComponent = () => {
  return (
    <C.Container>
      <C.ContainerItens>
        <C.Profile>
          <C.Photo src={ImageProfile} width={50} height={50} alt="Profile" />
          <C.ProfileName>Olá, Marcus</C.ProfileName>
        </C.Profile>

        <C.GroupItem>
          <FiHome size={23} />
          <C.Item>Inicio</C.Item>
        </C.GroupItem>

        <Accordion allowMultiple padding={4}>

          <AccordionItem border={0} marginBottom={3}>
            <AccordionButton
              style={{
                color: '#000',
                fontWeight: 600,
                gap: 10
              }}
            >
              <AiOutlineControl size={23} />
              <Box as="span" flex="1" textAlign="left">
                Controle
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} gap={5} display={'flex'} flexDirection={'column'}>
              <C.MenuItem>Pessoas</C.MenuItem>
              <C.MenuItem>Departamentos</C.MenuItem>
              <C.MenuItem>Cargos</C.MenuItem>
              <C.MenuItem>Tags</C.MenuItem>
              <C.MenuItem>Área de atuação</C.MenuItem>
              <C.MenuItem>Grupos</C.MenuItem>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={0} marginBottom={3}>
            <AccordionButton
              style={{
                color: '#000',
                fontWeight: 600,
                gap: 10
              }}
            >
              <AiOutlineControl size={23} />
              <Box as="span" flex="1" textAlign="left">
                Controle
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} gap={5} display={'flex'} flexDirection={'column'}>
              <C.MenuItem>Pessoas</C.MenuItem>
              <C.MenuItem>Departamentos</C.MenuItem>
              <C.MenuItem>Cargos</C.MenuItem>
              <C.MenuItem>Tags</C.MenuItem>
              <C.MenuItem>Área de atuação</C.MenuItem>
              <C.MenuItem>Grupos</C.MenuItem>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </C.ContainerItens>
    </C.Container>
  );
};
