
# OSI Model

- OSI stands for Open System Interconnection with the purpose to be a stardand model for computer network. 
- The model is divided by **Layers**
- Each Layer have a function

## The Layers
Each layer describe a specific networking component

The Layer 7 is called the Application Layer, here we have protocols like HTTP/FTP/gRPC. This is where our application leaves (our node.js, .net, java applications).

The Layer 6 is called Presentation Layer, the layer deals with encoding and serialization. 

In the Layer 5 we have the Session Layer, to establish connection, here we have the TLS Protocol (Transport Layer Security). 

In the Layer 4 we have the Transport Layer. Here is where the UDP/TCP lives.

Layer 3 we have the Network. The main protocol for this Layer is the IP, so the layer 3 deals with routes, identification of the host and the network.

Layer 2 is the Data Link layer, here we deal with Frames and MAC Addresses, where happens the lowest level of communication. 

Layer 1 is Physical layer, so we deal with Electric Signals, fiber or Radio Waves. 

# Host to Host Comunication

Imagine if we have to communicate between two devices, in the same network. One of the solutions to do that would be to identify the machine through an address, a physical address, so each network card would have his unique Media Access Control Address (MAC). But, If I have more than one host in my network, I have to send it to all of the hosts, so they can identify whether the message is for them or not. I, as the sender, don't know about the network configuration, and how many hosts exists in the network. 

- The big issue is that we neet to scale and find a way to eliminate the need to send it to everyone.

- The address need to get better

- We neet **Routability** 

This is why we have the IP Address. 

- Mac Addresses aren't efficienty. It's not possible to send a message accross the globe with only a MAC Address

- We need to *Narrow* the path 

The IP Address is responsible for identify the **network** and the **host**

Example : `192.168.1.1`

`192.168.1` is the **network** 

`1` is the **host**

But, this is not enough to identify the host, we need to know which process I need to send the package, since there is so many running. For that, we need **Ports**
