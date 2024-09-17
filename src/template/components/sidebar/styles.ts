import styled from "styled-components";
import Image from "next/image";
import { Box } from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  width: 271px;
  height: 100vh;
  background: #0AC681;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const GroupItem = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  gap: 7px;
  align-items: center;
  cursor: pointer;
`

export const Item = styled.div`
  display: flex;
  color: #000;
  font-style: normal;
  font-weight: 800;
`

export const Profile = styled.div`
  margin-top: 57px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Photo = styled(Image)`
  display: flex;
  width: 50px;
  border-radius: 50%;
`

export const ProfileName = styled.p`
  display: flex;
  color: #000;
  font-size: 17.433px;
  font-style: normal;
  font-weight: 600;
  line-height: 124.5%;
`

export const MenuItem = styled.div`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
`
